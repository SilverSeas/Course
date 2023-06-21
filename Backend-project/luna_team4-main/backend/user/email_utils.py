from django.core.mail import send_mail
from project import settings


def send_update_user_email(target_user, user):
    """Send email to target_user when a user is updated"""
    subject = 'User updated'
    message = 'The user {0} has been updated'.format(user.username)
    email_from = settings.EMAIL_HOST_USER
    recipient = [target_user.email]
    send_mail(subject, message, email_from, recipient)
