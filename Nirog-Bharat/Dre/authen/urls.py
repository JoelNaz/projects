from django.urls import path,include
from .views import LoginView
from . import views
from .views import RegisterView

urlpatterns = [
    path('oldlogin/', LoginView.as_view()),
    path('oldregister/',RegisterView.as_view()),
    path('index/',views.index,name='plegde'),
    path('pcert/',views.pcert,name='pcert'),
    path('dashboard/',views.dashboard,name='dashboard'),
    path('register/', views.UserRegister.as_view(), name='register'),
	path('login/', views.UserLogin.as_view(), name='login'),
	path('logout/', views.UserLogout.as_view(), name='logout'),
	path('user/', views.UserView.as_view(), name='user'),
    path('admincenter/', views.AdminCenter.as_view(), name='admincenter'),
    path('nearestcenter/', views.NearestCenter.as_view(), name='nearestcenter'),
    
]
