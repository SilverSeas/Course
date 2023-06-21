from django.db import models
from django.utils import timezone
from user.models import User
from review.models import RestaurantReview


class Comment(models.Model):
    comment_by_user = models.ForeignKey(User, on_delete=models.CASCADE)
    comments_on_review = models.ForeignKey(RestaurantReview, related_name='comments', on_delete=models.CASCADE)
    text_content = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    modified_date = models.DateTimeField(auto_now=True)
    likes = models.ManyToManyField(User, related_name='comment_likes')

    def __str__(self):
        return f'{self.id} - text {self.text_content}'
        # return f'{self.comment_by_user.username} - {self.comments_on_review.title}'
