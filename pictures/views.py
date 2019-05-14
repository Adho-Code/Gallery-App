from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import Image


# Create your views here.

# def start(request):

#     index_images = Image.objects.all()
#     return render(request,'index.html', {'index_images':index_images})

def index(request):

    images = Image.objects.all()
    return render(request, 'index.html', {'images': images})

def search_results(request):

    if 'image_category' in request.GET and request.GET["image_category"]:
        search_term = request.GET.get("image_category")
        searched_image = Image.search_by_category(search_term)
        message = f"{search_term}"

        return render(request, 'search.html',{"message":message,"index_images": searched_image})

    else:
        message = "You haven't searched for any term"
        return render(request, 'search.html',{"message":message})