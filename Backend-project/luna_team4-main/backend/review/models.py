from django.contrib.auth import get_user_model
from django.db import models


User = get_user_model()


class RestaurantReview(models.Model):
    REVIEW_CHOICES = (
        (1, '1'),
        (2, '2'),
        (3, '3'),
        (4, '4'),
        (5, '5'),
    )
    text_content = models.TextField()
    rating = models.IntegerField(choices=REVIEW_CHOICES)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    reviewed_by_user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    likes_on_review = models.PositiveIntegerField(default=0)
    liked_by_user = models.ManyToManyField(to=User, related_name='liked_review', blank=True)
    review_on_restaurant = models.ForeignKey(to='restaurant.Restaurant', on_delete=models.CASCADE, related_name='restaurant_reviews')

    class Meta:
        ordering = ['-date_created']

    def __str__(self):
        return f'{self.id} - {self.reviewed_by_user} - {self.text_content}'
