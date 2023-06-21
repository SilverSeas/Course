from rest_framework import serializers
from comment.serializers import CommentSerializer
from restaurant.serializers import RestaurantSerializer
from user.serializer import UserSerializer
from .models import RestaurantReview


class RestaurantReviewSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    review_on_restaurant = RestaurantSerializer(read_only=True)
    reviewed_by_user = UserSerializer(read_only=True)

    class Meta:
        model = RestaurantReview
        fields = ('id', 'comments', 'text_content', 'rating', 'date_created', 'date_modified',
                  'likes_on_review', 'reviewed_by_user', 'liked_by_user', 'review_on_restaurant')
        read_only_fields = ('id', 'date_created', 'date_modified', 'reviewed_by_user', 'review_on_restaurant',
                            'comments')


class LikeReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = RestaurantReview
        fields = ('id', 'likes_on_review', 'liked_by_user',)

    def validate(self, attrs):
        user = self.context['request'].user
        if not user.is_authenticated:
            raise serializers.ValidationError("You must be logged in to like a review")
        return attrs


class UserCommentedReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = RestaurantReview
        fields = ('id', 'text_content', 'reviewed_by_user')
