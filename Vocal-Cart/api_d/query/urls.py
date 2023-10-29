from django.urls import path
from .views import *
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    
    path('handleSearch/', views.search_walmart, name='handleSearch'),
    path('register/', views.UserRegister.as_view(), name='register'),
    path('login/', views.UserLogin.as_view(), name='login'),
    path('user/', views.UserView.as_view(), name='user'),
    path('get_recommendations/', views.GetRecommendations.as_view(), name='recommendations'),
    path('logout/', views.UserLogout.as_view(), name='logout')
    
]
