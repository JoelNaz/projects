from rest_framework import serializers
from .models import UserModel
from .models import Request
from django.contrib.auth import get_user_model, authenticate
from django.core.exceptions import ValidationError

UserModel = get_user_model()

class authenSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = '__all__'
        
class UserRegisterSerializer(serializers.ModelSerializer):
            class Meta:
                model = UserModel
                fields = '__all__'
            def create(self, clean_data):
                    user_obj = UserModel.objects.create_user(email=clean_data['email'], password=clean_data['password'])
                    user_obj.username = clean_data['username']
                    user_obj.no = clean_data['no']
                    user_obj.registeree = clean_data['registeree']
                    user_obj.altno = clean_data['altno']
                    user_obj.altemail = clean_data['altemail']
                    user_obj.addiction = clean_data['addiction']
                    user_obj.address = clean_data['address']
                    user_obj.state = clean_data['state']
                    user_obj.bloodgroup = clean_data['bloodgroup']
                    user_obj.gender = clean_data['gender']
                    user_obj.aadharimg = clean_data['aadharimg']
                    user_obj.profilepic = clean_data['profilepic']
                    
                    user_obj.save()
                    return user_obj
            
class RequestSerializers(serializers.ModelSerializer):
    class Meta:
                model = Request
                fields = '__all__'
                
    def create(self, clean_data):
        request_obj = Request.objects.create_req(email=clean_data['email'])
        return request_obj
    
            
            
class UserLoginSerializer(serializers.Serializer):
	email = serializers.EmailField()
	password = serializers.CharField()
	##
	def check_user(self, clean_data):
		user = authenticate(username=clean_data['email'], password=clean_data['password'])
		if not user:
			raise ValidationError('user not found')
		return user

class UserSerializer(serializers.ModelSerializer):
    requests = RequestSerializers(many=True, read_only=True)
    
    class Meta:
            model = UserModel
            fields = '__all__'
  
