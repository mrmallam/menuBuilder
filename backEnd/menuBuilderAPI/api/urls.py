from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ItemsViewSet

router = DefaultRouter()
router.register('items',ItemsViewSet,basename = 'items')

urlpatterns = [
    path('api/',include(router.urls)),
]