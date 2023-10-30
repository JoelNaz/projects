from django.urls import path
from . import views

urlpatterns = [
    path("auth", views.index, name="index"), 
    path("signup",views.signup,name="signup"),
    path("welcome",views.signin,name="signin"),
    path("home",views.home,name="home"),
    path("game",views.game,name="game"),
    path("submit",views.submit,name="submit"),
    path("rank",views.rank,name="rank")
       
]