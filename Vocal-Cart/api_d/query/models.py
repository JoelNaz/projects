from django.db import models
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


# Create your models here.
class UserModel(AbstractBaseUser, PermissionsMixin):
    REQUIRED_FIELDS = ['username']
    USERNAME_FIELD = 'email'
    username = models.CharField(null=True ,blank=True, max_length=255)
    no = models.IntegerField(null=True ,blank=True)
    email = models.CharField(unique=True, max_length=255)
    password = models.CharField(null=True, blank=True, max_length=300)
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
    

class SearchQuery(models.Model):
    user = models.ForeignKey(UserModel, on_delete=models.CASCADE)
    query = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.query