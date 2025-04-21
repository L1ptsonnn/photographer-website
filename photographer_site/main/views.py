from django.shortcuts import render
from django.http import JsonResponse
from .models import Order
from django.views import View


def index(request):
    return render(request, 'index.html')


class OrderCreateView(View):
    def post(self, request, *args, **kwargs):
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        if name and email and message:
            order = Order.objects.create(name=name, email=email, message=message)
            return JsonResponse({'status': 'ok', 'message': 'Your order has been sent!'})
        else:
            return JsonResponse({'status': 'fail', 'message': 'Please fill in all fields!'}, status=400)