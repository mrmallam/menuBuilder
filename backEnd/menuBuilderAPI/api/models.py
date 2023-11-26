from django.db import models

# Create your models here.
class Items(models.Model):
    title = models.CharField(max_length=25)
    description = models.CharField(max_length=255)
    price = models.FloatField()
