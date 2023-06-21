from django.contrib.auth.models import AbstractUser
from django.db import models


def user_directory_path(instance, filename):
    return f"users/{instance.id}/{filename}"


class User(AbstractUser):
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    location = models.CharField(max_length=50, blank=True)
    phone = models.CharField(max_length=20, blank=True)
    description = models.CharField(max_length=50, blank=True)
    join_date = models.DateTimeField(auto_now_add=True)
    profile_picture = models.ImageField(upload_to=user_directory_path, blank=True)
    things_i_love = models.CharField(max_length=50, blank=True)
    background_image = models.ImageField(upload_to=user_directory_path, blank=True)

    def __str__(self):
        return self.username
