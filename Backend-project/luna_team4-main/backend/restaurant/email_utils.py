from django.core.mail import send_mail
from project import settings


def send_create_restaurant_email(target_user, restaurant):
    """Send email to target_user when a restaurant is created"""
    subject = 'New restaurant created'
    message = 'A new restaurant has been created: {0}'.format(restaurant.name)
    email_from = settings.EMAIL_HOST_USER
    recipient = [target_user.email]
    send_mail(subject, message, email_from, recipient)


def send_update_restaurant_email(target_user, restaurant):
    """Send email to target_user when a restaurant is updated"""
    subject = 'Restaurant updated'
    message = 'The restaurant {0} has been updated'.format(restaurant.name)
    email_from = settings.EMAIL_HOST_USER
    recipient = [target_user.email]
    send_mail(subject, message, email_from, recipient)
