from django.db import models

# Create your models here.
class User(models.Model):
    id = models.AutoField(primary_key=True)
    uname = models.CharField(max_length=30 , null=True)
    email = models.CharField(max_length=30 , null=True)
    passw = models.CharField(max_length=30 , null=True)
    wpm = models.IntegerField(null=True)
    cpm = models.IntegerField(null=True)
    accu = models.IntegerField(null=True)
    score = models.IntegerField(null=True)
    errors =models.IntegerField(null=True)
    
    