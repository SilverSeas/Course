from django.contrib.auth import get_user_model
from django.db import models

from review.models import RestaurantReview

User = get_user_model()


class Restaurant(models.Model):
    CATEGORY_CHOICES = (
        ('CH', 'Swiss'),
        ('US', 'American'),
        ('IT', 'Italian'),
        ('SP', 'Spanish'),
        ('KR', 'Korean'),
        ('TH', 'Thai'),
        ('SRB', 'Serbian'),
    )

    PRICE_RANGE_CHOICES = (
        ('$', 'Cheap'),
        ('$$', 'Medium'),
        ('$$$', 'Expensive'),
    )

    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100, choices=CATEGORY_CHOICES)
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=100)
    website = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    opening_hours = models.CharField(max_length=100)
    price_range = models.CharField(max_length=100, choices=PRICE_RANGE_CHOICES)
    image = models.ImageField(upload_to='restaurant', blank=True)
    created_by_user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='created_restaurants', default=1)
    reviews = models.ManyToManyField(to=RestaurantReview, related_name='restaurant_reviews', blank=True)

    def get_average_rating(self):
        reviews = self.reviews.all()
        if not reviews:
            return 0
        total_rating = sum([review.rating for review in reviews])
        return total_rating / len(reviews)

    def __str__(self):
        return self.name
