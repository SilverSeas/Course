from django.contrib.auth import get_user_model
from django.db import models
from django.utils.crypto import get_random_string

User = get_user_model()


class Registration(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='registration')
    validation_code = models.CharField(max_length=6, null=True, blank=True)

    def generate_validation_code(self):
        self.validation_code = get_random_string(length=6)
        self.save()

        return self.validation_code

    def is_validation_code_valid(self, validation_code):
        return self.validation_code == validation_code
