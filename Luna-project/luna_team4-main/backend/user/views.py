from rest_framework import generics, permissions, status
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView

from .email_utils import send_update_user_email
from .models import User
from .permissions import IsOwnerOrReadOnly
from .serializer import UserSerializer, CustomTokenObtainPairSerializer, UserPasswordResetSerializer


class MyProfileView(APIView):
    """
    API endpoint to retrieve or update the authenticated user's profile.
    """
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

    def patch(self, request):
        serializer = UserSerializer(request.user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        response = Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        send_update_user_email(request.user, request.user)
        return response


class UserListView(generics.ListAPIView):
    """
    API endpoint to retrieve a list of all users.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class UserSearchView(generics.ListAPIView):
    """
    API endpoint to search for a user by username or email.
    """
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        search_string = self.request.query_params.get('search')
        if search_string:
            queryset = User.objects.filter(username__icontains=search_string) | User.objects.filter(
                email__icontains=search_string)
        else:
            queryset = User.objects.none()
        return queryset


class UserDetailView(generics.RetrieveAPIView):
    """
    API endpoint to retrieve a specific user's profile by ID.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class UserSearchByUsernameView(ListAPIView):
    """
    API endpoint to search for a user by username.
    """
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = User.objects.none()
        username = self.request.query_params.get("search")
        if username:
            queryset = User.objects.filter(username__icontains=username)
        return queryset


class UserSearchByEmailView(ListAPIView):
    """
    API endpoint to search for a user by email.
    """
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = User.objects.none()
        email = self.request.query_params.get("search")
        if email:
            queryset = User.objects.filter(email__icontains=email)
        return queryset


class CustomTokenObtainPairView(TokenObtainPairView):
    """
    API endpoint to retrieve a JWT token for a user.
    """
    serializer_class = CustomTokenObtainPairSerializer


class UserResetPasswordView(APIView):
    """
    API endpoint to reset a user's password.
    """
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserPasswordResetSerializer

    def post(self, request):
        serializer = UserPasswordResetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(f'Password reset failed: {serializer.errors}')
