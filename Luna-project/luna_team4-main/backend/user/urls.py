from django.urls import path
from .views import MyProfileView, UserListView, UserDetailView, UserSearchByUsernameView

urlpatterns = [
    path('me/', MyProfileView.as_view(), name='my-profile'),
    path('list/', UserListView.as_view(), name='user-list'),
    path('search/', UserSearchByUsernameView.as_view(), name='user-search'),
    path('users/<int:pk>/', UserDetailView.as_view(), name='user-detail'),
]
