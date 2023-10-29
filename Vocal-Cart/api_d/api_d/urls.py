"""api_d URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView
from django.urls import path
from . import views
from query.views import DetailViews
from rest_framework import routers

route = routers.DefaultRouter()
route.register("",DetailViews,basename='detailviews')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('',TemplateView.as_view(template_name='index.html')),
    path("query",views.query,name="query"),
    path('v/',TemplateView.as_view(template_name='index.html')),
    path('a/',TemplateView.as_view(template_name='index.html')),
    path('signin/',TemplateView.as_view(template_name='index.html')),
    path('signup/',TemplateView.as_view(template_name='index.html')),
    path('api-auth/', include('rest_framework.urls')),
    path('query/', include("query.urls")),
    path('api/',include(route.urls)),
]
