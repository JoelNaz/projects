from django.contrib import messages
from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from .models import User


# Create your views here.
def index(request):
    return render(request, "authenticate/auth.html")


def start(request):
    return render(request, "authenticate/home.html")

def home(request):
    return render(request, "authenticate/home.html")

def signup(request):
    if request.method == 'POST':
        user = User()
        user.uname = request.POST['names']
        user.email = request.POST['emails']
        user.passw = request.POST['passwords']
        user.save()
        messages.success(request, "Your Account has been created.")
        return render(request, "authenticate/auth.html")
    
    return render(request, "authenticate/auth.html")

def signin(request):
    
    if request.method == 'POST':
        usernamel = request.POST['usernamel']
        passwordl = request.POST['passwordl']

        if User.objects.filter(uname=usernamel, passw=passwordl).exists():
            fname = usernamel
            return render(request, "authenticate/home.html", {'fname': fname})
            
        else:
            messages.error(request, "Bad Credentials")
            return render(request, "authenticate/auth.html")
  
def submit(request):
    if request.method=='POST':
        wpm = request.POST.get("wpm")
        usern = request.POST.get("username")
        cpm = request.POST.get("cpm")
        accu = request.POST.get("accu")
        error = request.POST.get("error")
        user = User()
        if  User.objects.filter(uname=usern).exists():
            user = User.objects.get(uname=usern)
            user.wpm = wpm
            user.cpm = cpm
            user.errors = error 
            user.accu = accu
            user.score = (int(wpm)*int(accu))
            print(user.score)
            user.save()
            
            return render(request, "authenticate/home.html", {'fname': usern})
    
    return render(request, "authenticate/auth.html")

def rank(request):
    user = User.objects.all().order_by('-score')
    
    return render(request, "authenticate/rank.html", {'User':user})


def game(request):
    if request.method=='POST':
        f = request.POST.get('fname')
        return render(request, "authenticate/game.html", {'f': f})
    
    return render(request, "authenticate/game.html")
