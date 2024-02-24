from django.urls import path

from .views import *

urlpatterns = [
    path('', index),
    path('Application/', form, name='app'),
]