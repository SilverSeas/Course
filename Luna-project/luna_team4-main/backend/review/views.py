from drf_yasg.utils import swagger_auto_schema
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import generics, permissions

from restaurant.models import Restaurant
from .email_utils import send_liked_review_email
from .models import RestaurantReview
from .permissions import IsOwnerOrReadOnly
from .serializers import RestaurantReviewSerializer, LikeReviewSerializer, UserCommentedReviewSerializer


class ReviewDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = RestaurantReviewSerializer
    permission_classes = [IsOwnerOrReadOnly]
    lookup_field = 'id'

    @swagger_auto_schema(
        operation_description="Get a specific review by ID and display all the information."
    )
    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    @swagger_auto_schema(
        operation_description="Update a specific review (only by owner)."
    )
    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

    @swagger_auto_schema(
        operation_description="Delete a specific review (only by owner)."
    )
    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

    def get_queryset(self):
        return RestaurantReview.objects.filter(pk=self.kwargs['id'])

    def perform_update(self, serializer):
        serializer.save(reviewed_by_user=self.request.user)

    def perform_destroy(self, instance):
        instance.delete()
        return Response(status=204)


class CreateRestaurantReviewView(generics.CreateAPIView):
    """
        Create new review for a restaurant.
    """
    serializer_class = RestaurantReviewSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        restaurant = Restaurant.objects.get(pk=self.kwargs['pk'])
        review = serializer.save(reviewed_by_user=self.request.user, review_on_restaurant=restaurant)
        restaurant.reviews.add(review)
        restaurant.save()


class RestaurantReviewListView(generics.ListAPIView):
    """
    Get the list of the reviews for a single restaurant.
    """
    serializer_class = RestaurantReviewSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        restaurant = Restaurant.objects.get(pk=self.kwargs['restaurant_id'])
        return RestaurantReview.objects.filter(review_on_restaurant=restaurant)


class UserRestaurantReviewListView(generics.ListAPIView):
    """
    Get the list of the reviews by a single user.
    """
    serializer_class = RestaurantReviewSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return RestaurantReview.objects.filter(reviewed_by_user=self.kwargs['user_id'])


class LikeReviewView(generics.CreateAPIView):
    """
    Like a review.
    """
    serializer_class = LikeReviewSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        review = RestaurantReview.objects.get(pk=self.kwargs['review_id'])
        if self.request.user in review.liked_by_user.all():
            review.likes_on_review -= 1
            review.liked_by_user.remove(self.request.user)
            review.save()
            return Response({'status': 'unliked'})
        else:
            review.likes_on_review += 1
            review.liked_by_user.add(self.request.user)
            review.save()
            response = Response({'status': 'liked'})
            send_liked_review_email(review.reviewed_by_user, review)
            return response


class UserReviewLikesListView(generics.ListAPIView):
    """
    Get the list of the reviews liked by the current user.
    """
    serializer_class = RestaurantReviewSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        user = self.request.user
        return RestaurantReview.objects.filter(liked_by_user=user)


class UserCommentedReviewListView(generics.ListAPIView):
    """
    Get the list of the reviews commented by the current user.
    """
    serializer_class = UserCommentedReviewSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        user = self.request.user
        # comment something
        return RestaurantReview.objects.filter(comments__comment_by_user=user).distinct()
