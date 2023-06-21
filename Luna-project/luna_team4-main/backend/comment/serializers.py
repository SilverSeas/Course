from rest_framework import serializers
from user.serializer import UserSerializer
from .models import Comment


class CommentSerializer(serializers.ModelSerializer):
    comment_by_user = UserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'


class CreateCommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ['text_content']


class DeleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
