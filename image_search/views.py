from django.http.response import HttpResponse

def home(request):
    return HttpResponse("Welcome to image search web app")