from django.urls import path
from .views import CommentCreateAPIView, CommentListAPIView, CommentRetrieveUpdateDestroyAPIView
# path('reviews/comments/<int:pk>/', CommentRetrieveUpdateDestroyAPIView.as_view(), name='comment-detail'),
urlpatterns = [
    path('reviews/comments/<int:user_id>/', CommentListAPIView.as_view(), name='comment-list'),
    path('reviews/comments/new/<int:review_id>/', CommentCreateAPIView.as_view(), name='comment-create'),
    path('<int:pk>/', CommentRetrieveUpdateDestroyAPIView.as_view(), name='comment-detail'),
]
