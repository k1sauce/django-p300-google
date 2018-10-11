from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
	return render(request,'muse/homepage.html')


from django.views.generic import TemplateView
from django.http import HttpResponse

import json

class PostExample(TemplateView):
    template_name = 'muse/start.html'

    def post(self, request):
        return HttpResponse(json.dumps({'key': 'value'}), mimetype="application/json")

