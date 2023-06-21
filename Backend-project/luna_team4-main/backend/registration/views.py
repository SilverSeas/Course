from django.core.mail import send_mail
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from project import settings
from registration.models import Registration
from registration.serializers import RegistrationSerializer, RegistrationValidationSerializer
from user.admin import User


class RegistrationView(APIView):
    """
        Register new user by asking for email (a validation code will be sent to given email).
    """
    serializer_class = RegistrationSerializer
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data.get('email')

        if not email:
            return Response({'error': 'Email is required'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=email).exists():
            return Response({'error': 'User with this email already exists'}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create(
            username=email,
            email=email,
            is_active=False,
        )

        registration = Registration.objects.create(
            user=user,
        )

        validation_code = registration.generate_validation_code()
        message = f'Your validation code is {validation_code}'
        send_mail(
            'Luna Validation Code',
            message,
            settings.EMAIL_HOST_USER,
            [email],
            fail_silently=False,
            auth_user=settings.EMAIL_HOST_USER,
            auth_password=settings.EMAIL_HOST_PASSWORD,
        )

        return Response({'success': 'Validation code was sent to your email'}, status=status.HTTP_200_OK)


class RegistrationValidationView(APIView):
    """
        Validate the creation of new user with the code sent by email.
    """
    serializer_class = RegistrationValidationSerializer
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data.get('email')
        validation_code = serializer.validated_data.get('validation_code')
        username = serializer.validated_data.get('username')
        password = serializer.validated_data.get('password')
        password_repeat = serializer.validated_data.get('password_repeat')
        location = serializer.validated_data.get('location')

        if not email:
            return Response({'error': 'Email is required'}, status=status.HTTP_400_BAD_REQUEST)

        if not validation_code:
            return Response({'error': 'Validation code is required'}, status=status.HTTP_400_BAD_REQUEST)

        user = get_object_or_404(User, email=email)

        if not user.registration.is_validation_code_valid(validation_code):
            return Response({'error': 'Validation code is not valid'}, status=status.HTTP_400_BAD_REQUEST)

        if not all([username, password, password_repeat, location]):
            return Response({'error': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)

        if password != password_repeat:
            return Response({'error': 'Passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)

        user.username = username
        user.set_password(password)
        user.location = location
        user.is_active = True
        user.save()

        return Response({'success': 'User was successfully created'}, status=status.HTTP_200_OK)
