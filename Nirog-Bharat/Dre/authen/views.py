from .models import Request
from django.core import serializers
from django.core.serializers.json import DjangoJSONEncoder
import json
from django.http import JsonResponse
from django.shortcuts import render
from .models import UserModel
from .serializers import authenSerializer
from rest_framework import generics, viewsets 
from rest_framework.views import *
from rest_framework.response import Response
from django.shortcuts import redirect
from django.views.generic import TemplateView
from django.contrib.auth import get_user_model, login, logout
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from geopy.distance import geodesic
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserRegisterSerializer, UserLoginSerializer, UserSerializer, RequestSerializers
from rest_framework import permissions, status
from .validations import custom_validation, validate_email, validate_password


# Create your views here.

class RegisterView(generics.ListCreateAPIView):
    
    serializer_class = authenSerializer
    queryset = UserModel.objects.all()
    def post(self,request, *args, **kwargs):
    
        serializer =self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            #self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            
            print(serializer.data)
            print('success')
            
            return Response(
                data={
               "status": 201,
               "message": "Product Successfully Created",                
               "data": serializer.data,                
               },
               status=status.HTTP_201_CREATED,
               headers=headers
                )
            
            
            
        
# Create your views here.



class LoginView(generics.ListCreateAPIView):
    
    serializer_class = authenSerializer
    queryset = UserModel.objects.all()
    def post(self,request, *args, **kwargs):
    
        serializer =self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            result = serializer.data
           
            
            headers = self.get_success_headers(serializer.data)
            print(result)
            if UserModel.objects.filter(email=result['email'], password=result["password"]).exists():
                
                print("success")
                
                
                
                
                
                
            return Response(
                data={
               "status": 201,
               "message": "Product Successfully Created",                
               "data": serializer.data,                
               },
               status=status.HTTP_201_CREATED,
               headers=headers
                )
            
                    
            
def index(request):
    return render(request, "authen/pledge.html")
    
def dashboard(request):
    return render(request, "authen/dashboard.html")   

def pcert(request):
    return render(request, "authen/pledgecert.html")

#class DashboardView(generics.ListCreateAPIView):
    
 #   serializer_class = authenSerializer
  #  queryset = authen.objects.all()
   # def post(self,request, *args, **kwargs):
   
   

class UserRegister(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        clean_data = custom_validation(request.data)
        serializer = UserRegisterSerializer(data=clean_data)

        if serializer.is_valid(raise_exception=True):
            headers = self.get_success_headers(serializer.data)
            user = serializer.create(clean_data)

            if user:
                user_location = (request.data['centerLat'], request.data['centerLong'])
                branches = UserModel.objects.all()
                nearest_branch = None
                min_distance = None

                for branch in branches:
                    branch_location = (branch.centerLat, branch.centerLong)
                    distance = geodesic(user_location, branch_location).kilometers

                    if min_distance is None or distance < min_distance:
                        min_distance = distance
                        nearest_branch = branch

                if nearest_branch:
                    req_serializer = RequestSerializers(request.data['email'])
                    req = req_serializer.create(clean_data)
                    nearest_branch.requests.add(req)
                    nearest_branch.save()
                    print(f"Added request for branch {nearest_branch.center}")

                return Response(
                    data={
                        "status": 201,
                        "message": "Product Successfully Created",
                        "data": serializer.data,
                        "nearest_branch": nearest_branch.center if nearest_branch else None,
                        "user_request": request.data['email']
                    },
                    status=status.HTTP_201_CREATED,
                    headers=headers
                )
                    #return Response(status=status.HTTP_400_BAD_REQUEST)


class UserLogin(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = (SessionAuthentication,)
	##
	def post(self, request):
		data = request.data
		assert validate_email(data)
		assert validate_password(data)
		serializer = UserLoginSerializer(data=data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.check_user(data)
			login(request, user)
			return Response(serializer.data, status=status.HTTP_200_OK)


class UserLogout(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = ()
	def post(self, request):
		logout(request)
		return Response(status=status.HTTP_200_OK)


class UserView(APIView):
	permission_classes = (permissions.IsAuthenticated,)
	authentication_classes = (SessionAuthentication,)
	##
	def get(self, request):
		serializer = UserSerializer(request.user)
		return Response(serializer.data, status=status.HTTP_200_OK)

    
   
        
class AdminCenter(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    
    def get(self, request):
        serializer = UserSerializer(request.user)
        result = list(UserModel.objects.filter(center=serializer.data['center'], centeradmin=False ).values())
        #data = serializers.serialize('json', result)
        #print(data)
        #return JsonResponse({'data': json.dumps(result,sort_keys=True,indent=1,cls=DjangoJSONEncoder)})
        #return JsonResponse(json.dumps(result,sort_keys=True,indent=1,cls=DjangoJSONEncoder), safe=False,status=status.HTTP_200_OK)
        return Response(result, status=status.HTTP_200_OK)
    

class DetailViews(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    

class NearestCenter(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request):
        #user_location_Lat = request.data['centerLat']  # Implement this function to get user's location
        #user_location_Long = request.data['centerLong']
        user_location = (request.data['centerLat'],request.data['centerLong'])
        branches = UserModel.objects.all()
        nearest_branch = None
        min_distance = None

        for branch in branches:
            branch_location = (branch.centerLat, branch.centerLong)
            distance = geodesic(user_location, branch_location).kilometers

            if min_distance is None or distance < min_distance:
                min_distance = distance
                nearest_branch = branch

        #print(nearest_branch.center)
        return Response(nearest_branch.center, status=status.HTTP_200_OK)
    
            
            
        
    
    
        
            
        