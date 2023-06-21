from django.urls import path

from review.views import CreateRestaurantReviewView, RestaurantReviewListView, UserRestaurantReviewListView, \
    ReviewDetailView, LikeReviewView, UserReviewLikesListView, UserCommentedReviewListView

urlpatterns = [
    path("<int:id>/", ReviewDetailView.as_view(), name="review_list"),
    path('new/<int:pk>/', CreateRestaurantReviewView.as_view(), name='create_review'),
    path('restaurant/<int:restaurant_id>/', RestaurantReviewListView.as_view(), name='restaurant_review_list'),
    path('user/<int:user_id>/', UserRestaurantReviewListView.as_view(), name='user_review_list'),
    path('like/<int:review_id>/', LikeReviewView.as_view(), name='like_review'),
    path('likes/', UserReviewLikesListView.as_view(), name='user_review_likes_list'),
    path('commented/', UserCommentedReviewListView.as_view(), name='user_commented_review_list'),
]
