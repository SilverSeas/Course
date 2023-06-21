from django.core.mail import send_mail
from project import settings


def send_liked_review_email(target_user, review):
    """Send email to target_user when a review is liked"""
    subject = 'Review liked'
    message = 'The review {0} has been liked'.format(review)
    email_from = settings.EMAIL_HOST_USER
    recipient = [target_user.email]
    send_mail(subject, message, email_from, recipient)
