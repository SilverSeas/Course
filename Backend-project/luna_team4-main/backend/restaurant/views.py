from drf_yasg.utils import swagger_auto_schema
from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import AllowAny

from restaurant.email_utils import send_create_restaurant_email, send_update_restaurant_email
from restaurant.models import Restaurant
from restaurant.permissions import IsOnlyAuthenticatedUser, IsOwnerOrReadOnly
from restaurant.serializers import RestaurantSerializer, CreateRestaurantSerializer, PatchRestaurantSerializer, \
    RestaurantCategorySerializer
from django.db.models import Q, Avg
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from user.serializer import UserSerializer
from review.serializers import RestaurantReviewSerializer
from review.models import RestaurantReview
from user.models import User


class RestaurantList(generics.ListCreateAPIView):
    """
    API endpoint to get the list of all the restaurant.
    """
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = [AllowAny]


class RestaurantCreate(generics.CreateAPIView):
    """
    API endpoint to create a new restaurant.
    """
    queryset = Restaurant.objects.all()
    serializer_class = CreateRestaurantSerializer
    permission_classes = [IsOnlyAuthenticatedUser]

    def perform_create(self, serializer):
        restaurant = serializer.save()
        target_user = self.request.user
        send_create_restaurant_email(target_user, restaurant)


class RestaurantCategoryList(generics.ListAPIView):
    """
    Get the all the restaurants by category.
    """
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        category = self.kwargs['category']
        return Restaurant.objects.filter(category=category)


class RestaurantListByUser(generics.ListAPIView):
    """
    Get the all the restaurants created by a specific user in chronological order.
    """
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return Restaurant.objects.filter(created_by_user_id=user_id)


class RestaurantDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = PatchRestaurantSerializer
    permission_classes = [IsOwnerOrReadOnly]

    @swagger_auto_schema(
        operation_description="Get the details of a restaurant by providing the id of the restaurant."
    )
    def get(self, request, *args, **kwargs):
        self.serializer_class = RestaurantSerializer
        return self.retrieve(request, *args, **kwargs)

    @swagger_auto_schema(
        operation_description="Update a restaurant by id (only by owner or restaurant admin)."
    )
    def patch(self, request, *args, **kwargs):
        self.serializer_class = PatchRestaurantSerializer
        response = self.partial_update(request, *args, **kwargs)
        target_user = self.request.user
        restaurant = self.get_object()
        send_update_restaurant_email(target_user, restaurant)
        return response

    @swagger_auto_schema(
        operation_description="Delete a restaurant by id (only by owner or restaurant admin)."
    )
    def delete(self, request, *args, **kwargs):
        self.serializer_class = PatchRestaurantSerializer
        return self.destroy(request, *args, **kwargs)

    def perform_update(self, serializer):
        restaurant = self.get_object()
        if restaurant.created_by_user == self.request.user:
            serializer.save()
        else:
            raise PermissionDenied()

    def perform_destroy(self, instance):
        restaurant = self.get_object()
        if restaurant.created_by_user == self.request.user:
            instance.delete()
        else:
            raise PermissionDenied()


class CategoryListView(generics.ListAPIView):
    """
    Get the list of all the categories.
    """
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantCategorySerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Restaurant.objects.values('category').distinct()


class SearchAPIView(APIView):
    """
    Search for ‘restaurants’, ‘reviews’ or ‘users’. {type: ‘restaurants’, "‘search_string’: ‘Pub’}.
    """
    permission_classes = [AllowAny]

    def get(self, request):
        search_string = request.query_params.get('search_string')
        search_type = request.query_params.get('type')

        if search_type == 'restaurants':
            restaurants = Restaurant.objects.filter(
                Q(name__icontains=search_string) |
                Q(category__icontains=search_string) |
                Q(city__icontains=search_string)
            )
            serializer = RestaurantSerializer(restaurants, many=True)
            return Response(serializer.data)

        elif search_type == 'reviews':
            reviews = RestaurantReview.objects.filter(
                Q(text_content__icontains=search_string) |
                Q(reviewed_by_user__username__icontains=search_string)
            )
            serializer = RestaurantReviewSerializer(reviews, many=True)
            return Response(serializer.data)

        elif search_type == 'users':
            users = User.objects.filter(
                Q(username__icontains=search_string) |
                Q(email__icontains=search_string) |
                Q(first_name__icontains=search_string) |
                Q(last_name__icontains=search_string)
            )
            serializer = UserSerializer(users, many=True)
            return Response(serializer.data)

        else:
            return Response({'message': 'Invalid search type.'}, status=400)


class BestRestaurantsView(APIView):
    """
    Get the best 4 restaurants by rating.
    """
    permission_classes = [AllowAny]

    def get(self, request):
        restaurants = Restaurant.objects.all().annotate(avg_rating=Avg('reviews__rating')).order_by('-avg_rating')[:4]
        serializer = RestaurantSerializer(restaurants, many=True)
        return Response(serializer.data)
