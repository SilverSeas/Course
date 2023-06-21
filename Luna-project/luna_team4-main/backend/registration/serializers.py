from rest_framework import serializers


class RegistrationSerializer(serializers.Serializer):
    email = serializers.EmailField()


class RegistrationValidationSerializer(serializers.Serializer):
    email = serializers.EmailField()
    username = serializers.CharField(min_length=1)
    password = serializers.CharField(min_length=1)
    password_repeat = serializers.CharField(min_length=1)
    location = serializers.CharField(min_length=1)
    validation_code = serializers.CharField(min_length=1)
