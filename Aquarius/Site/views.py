from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from Site.forms import *

# Create your views here.

def index(request):
    return render(request, 'aquarius/content.html')

def form(request):
    # if this is a POST request we need to process the form data
    if request.method == "POST":
        # create a form instance and populate it with data from the request:
        form = ApplicationForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required
            successForm = form.cleaned_data
            print(str(successForm))
            return HttpResponse("Sent successfully!")

    # if a GET (or any other method) we'll create a blank form
    else:
        form = ApplicationForm()

    return render(request, 'aquarius/application_form.html', {"form": form})