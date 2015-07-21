from django.http.response import HttpResponse
from django.shortcuts import render
from image_search.forms import image_upload_form

def home(request):
    if request.method == 'POST':
        form = image_upload_form(request.POST , request.FILES)
        
        if form.is_valid():
            #handle uploaded file
            #upload_handler(request.FILES["image"])
            return HttpResponse("Success")
        else:
            # Show field validation errors manually
            upload_error = form._errors["image"]
            form = image_upload_form
            return render(request , 'home' , {'form' : form , "upload_error": upload_error})
     
    else:        
        form = image_upload_form
    return render(request , 'home' , {'form' : form })

