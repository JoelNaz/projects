from django.shortcuts import render
from .models import *
from rest_framework import generics, viewsets 
from rest_framework.views import *
from rest_framework.response import Response
import requests
from django.http import JsonResponse
import json
from serpapi import GoogleSearch
from rest_framework import permissions, status
from .validations import custom_validation, validate_email, validate_password
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserRegisterSerializer, UserSerializer, UserLoginSerializer
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from django.contrib.auth import get_user_model, login, logout
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from collections import Counter
import pandas as pd

# Create your views here.



def search_walmart(request):
    
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            query = data.get('query', '')
            user_id = request.user.id
            
            try:
                user_instance = get_user_model().objects.get(id=user_id)
            except get_user_model().DoesNotExist:
           
                user_instance = None

            if user_instance!=None:
                search_query = SearchQuery(query=query, user=user_instance)
                search_query.save()

            params = {
                'api_key': '8e1237e77711fa1531847e512ef8928388c691dd58d6b9638e7926e0afbdf6b8', 
                'engine': 'walmart',
                'query': query,
                'spelling': True,
                'sort': 'best_match',
                
            }

            search_results = []
            try:
                search = GoogleSearch(params)
                results = search.get_dict()
                

                for result in results.get('organic_results', [])[:9]:
                    primary_offer = result.get('primary_offer', {})
                    product_info = {
                        'title': result.get('title', ''),
                        'price': primary_offer.get('offer_price', ''),
                        'ratings': result.get('rating', ''),
                        'image': result.get('thumbnail', ''),
                        'link': result.get('link', '')
                    }
                    search_results.append(product_info)
                
                print(search_results)

                return JsonResponse({'results': search_results})

            except Exception as e:
               
                print(f"SerpApi error: {e}")
                return JsonResponse({'error': 'Error fetching search results from SerpApi'}, status=500)

        except Exception as e:
          
            print(f"Unexpected error: {e}")
            return JsonResponse({'error': 'Unexpected error occurred'}, status=500)

    else:
     
        return JsonResponse({'error': 'Invalid request method. Use POST.'}, status=400)
    
    
    
    
    
class GetRecommendations(APIView):
    def post(self, request, *args, **kwargs):
        user_email = request.data.get('email', None)
        print(user_email)

      
        try:
            user = UserModel.objects.get(email=user_email)
        except UserModel.DoesNotExist:
            return Response({'error': 'User with this email does not exist.'}, status=status.HTTP_404_NOT_FOUND)

      
        user_queries = SearchQuery.objects.filter(user=user).values_list('query', flat=True)
        
      


       
        stop_words = set(stopwords.words('english'))
        cleaned_tokens = []
        for query in user_queries:
            tokens = word_tokenize(query.lower())  
            cleaned_tokens.extend([word for word in tokens if word.isalpha() and word not in stop_words])

       
        word_counter = Counter(cleaned_tokens)
        relevant_words = [word for word, count in word_counter.most_common(5)]  
        
        
        recommendations = self.get_product_recommendations(relevant_words, num_recommendations=5)
        #print(recommendations)
        print(relevant_words)
        return Response({'recommendations': recommendations}, status=status.HTTP_200_OK)

    def get_product_recommendations(self, relevant_words, num_recommendations=3):
      
        api_key = '8e1237e77711fa1531847e512ef8928388c691dd58d6b9638e7926e0afbdf6b8'
        search_results = []
        try:
            params = {
                'api_key': api_key,
                'engine': 'walmart',
                'query': ' '.join(relevant_words),  
                'num': num_recommendations,  
                'spelling': True,
                'sort': 'best_match',
            }
            search = GoogleSearch(params)
            results = search.get_dict()
            for result in results.get('organic_results', [])[:9]:
                primary_offer = result.get('primary_offer', {})
                product_info = {
                    'title': result.get('title', ''),
                    'price': primary_offer.get('offer_price', ''),
                    'ratings': result.get('rating', ''),
                    'image': result.get('thumbnail', ''),
                }
                search_results.append(product_info)
        except Exception as e:
            print(f"Error fetching search results from SerpApi: {e}")
        
        return search_results
    
    
    



class UserRegister(generics.ListCreateAPIView):
	permission_classes = (permissions.AllowAny,)
	def post(self, request, *args, **kwargs):
		clean_data = custom_validation(request.data)
		serializer = UserRegisterSerializer(data=clean_data)
		if serializer.is_valid(raise_exception=True):
                    headers = self.get_success_headers(serializer.data)
                    print(serializer.data)
                    user = serializer.create(clean_data)
                    if user:
                        return Response(
                                        data={
                                    "status": 201,
                                    "message": "Product Successfully Created",                
                                    "data": serializer.data,                
                                    },
                                    status=status.HTTP_201_CREATED,
                                    headers=headers
                                        )

class DetailViews(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    
    
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