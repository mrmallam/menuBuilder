from django.shortcuts import render

# Create your views here.

from .serializer import ItemsSerializer
from rest_framework import viewsets
from .models import Items

class ItemsViewSet(viewsets.ModelViewSet):
    queryset = Items.objects.all()
    serializer_class = ItemsSerializer