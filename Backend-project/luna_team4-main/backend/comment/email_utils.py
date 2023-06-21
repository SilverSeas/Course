from django.core.mail import send_mail
from project import settings


def send_new_comment_on_review_email(target_user, review):
    """Send email to target_user when a review is commented"""
    subject = 'Review commented'
    message = 'The review {0} has been commented'.format(review)
    email_from = settings.EMAIL_HOST_USER
    recipient = [target_user.email]
    send_mail(subject, message, email_from, recipient)
