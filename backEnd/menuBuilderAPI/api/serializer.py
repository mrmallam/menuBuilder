#takes the content of our model and describes it to our API

from rest_framework import serializers
from .models import Items

class ItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Items
        fields = ['id','title','description','price']