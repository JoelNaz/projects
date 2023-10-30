from django.db import models
import json
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

class AppUserManager(BaseUserManager):
        def create_user(self, email, password=None,**extra_fields):
            if not email:
                raise ValueError('Users must have an email address')

            user = self.model(
                email=self.normalize_email(email),**extra_fields
            )

            user.set_password(password)
            user.save(using=self._db)
            return user

        def create_staffuser(self, email, password,**extra_fields):
            
            user = self.create_user(
                email,
                password=password,
                **extra_fields
            )
            user.staff = True
            user.save(using=self._db)
            return user

        def create_superuser(self, email, password,**extra_fields):
        
            user = self.create_user(
                email,
                password=password,
                **extra_fields
            )
            user.staff = True
            user.admin = True
            user.save(using=self._db)
            return user
        
        
class RequestManager(models.Manager):
    def create_req(self, email):
        request_obj = self.create(reqs=email)
        return request_obj

class Request(models.Model):
    reqs = models.CharField(null=True, blank=True, max_length=255)
    objects = RequestManager()

    def __str__(self):
        return self.reqs
    
    



# Create your models here.
class UserModel(AbstractBaseUser, PermissionsMixin):
    REQUIRED_FIELDS = ['username']
    USERNAME_FIELD = 'email'
    registeree = models.CharField(null=True ,blank=True, max_length=255)
    username = models.CharField(null=True ,blank=True, max_length=255)
    no = models.IntegerField(null=True ,blank=True)
    altno = models.IntegerField(null=True ,blank=True)
    email = models.CharField(unique=True, max_length=255)
    password = models.CharField(null=True, blank=True, max_length=300)
    altemail = models.CharField(null=True ,blank=True, max_length=255)
    addiction = models.CharField(null=True ,blank=True, max_length=255)
    address = models.CharField(null=True ,blank=True, max_length=100)
    state = models.CharField(null=True, blank=True, max_length=200)
    gender = models.CharField(null=True, blank=True, max_length=200)
    aadharimg = models.ImageField(null=True, blank=True, upload_to='aadharimgs/')
    profilepic = models.ImageField(null=True, blank=True, upload_to='profilepics/')
    bloodgroup = models.CharField(null=True ,blank=True, max_length=100)
    doctorAssigned = models.CharField(null=True ,blank=True, max_length=255)
    pincode = models.CharField(null=True ,blank=True, max_length=255)
    centerLat = models.CharField(null=True ,blank=True, max_length=255)
    centerLong = models.CharField(null=True ,blank=True, max_length=255)
    course = models.CharField(null=True ,blank=True, max_length=200)
    center = models.CharField(null=True ,blank=True, max_length=300)
    requests = models.ManyToManyField(Request, related_name='users', blank=True)
    is_active = models.BooleanField(default=True)
    is_centeradmin = models.BooleanField(default=False)
    staff = models.BooleanField(default=False) 
    admin = models.BooleanField(default=False)
    objects = AppUserManager()
    
    def __str__(self):
        return self.email
    
    def get_full_name(self):
        return self.email
    

    def get_short_name(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.staff

    @property
    def is_admin(self):
        return self.admin
    
