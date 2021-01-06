from django.contrib.auth import get_user_model
User=get_user_model()
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
class SignupView(APIView):
  permission_classes=(permissions.AllowAny,)

  def post(self, request, format=None):
    data= self.request.data
    name=data['name']
    email=data['email']
    password=data['password']
    password2=data['password2']

    if password == password2:
      if User.objects.filter(email=email).exists():
        return Response({'error': 'email already exist'})
      else:
        if len(password) < 6:
          return Response({'error': 'password must be atleast 6 characters'})
        else:
          user= User.objects.create_user(email=email,password=password, name=name)
          user.save()
          return Response({'success': 'User created Successfully'})
    else:
      return Response({'error': 'Passwords do not match'})