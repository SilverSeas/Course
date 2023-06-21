from django.urls import path

from restaurant.views import RestaurantList, RestaurantCreate, RestaurantCategoryList, \
    RestaurantListByUser, RestaurantDetail

urlpatterns = [
    path('', RestaurantList.as_view(), name='restaurant-list'),
    path('new/', RestaurantCreate.as_view(), name='restaurant-create'),
    path('category/<str:category>/', RestaurantCategoryList.as_view(), name='restaurant-category-detail'),
    path('user/<int:user_id>/', RestaurantListByUser.as_view(), name='restaurant-list-by-user'),
    path('<int:pk>/', RestaurantDetail.as_view(), name='restaurant-detail'),

]
