from .email_utils import send_new_comment_on_review_email
from .models import Comment
from .serializers import CommentSerializer, DeleteSerializer, CreateCommentSerializer
from .permissions import IsOwnerOrAdminOrReadOnly
from review.models import RestaurantReview
from rest_framework import generics, permissions
from rest_framework.response import Response


class CommentCreateAPIView(generics.CreateAPIView):
    """
    API endpoint to create a comment on a review.
    """
    serializer_class = CreateCommentSerializer
    permission_classes = [IsOwnerOrAdminOrReadOnly]

    def perform_create(self, serializer):
        review_id = self.kwargs.get('review_id')
        review = RestaurantReview.objects.get(id=review_id)
        serializer.save(comment_by_user=self.request.user, comments_on_review=review)
        target_user = review.reviewed_by_user
        response = Response({'status': 'commented'})
        send_new_comment_on_review_email(target_user, review)
        return response


class CommentListAPIView(generics.ListAPIView):
    """
    API endpoint to retrieve a list of all comments on a review.
    """
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user_id = self.kwargs.get('user_id')
        return Comment.objects.filter(comment_by_user=user_id)


class CommentRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    API endpoint to retrieve, update or delete a specific comment on a review.
    """
    queryset = Comment.objects.all()
    serializer_class = DeleteSerializer

    # permission_classes = [permissions.IsAuthenticated, IsOwnerOrAdminOrReadOnly]

    def perform_destroy(self, instance):
        instance.delete()
        return Response(status=204)
