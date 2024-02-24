from django import forms

class ApplicationForm(forms.Form):
    name = forms.CharField(label="Name", max_length=100)
    phone_number = forms.CharField(label="Phone number", max_length=100)
    address = forms.CharField(label="Delivery address", max_length=100)
    comment = forms.CharField(label="Comment or message", max_length=100)