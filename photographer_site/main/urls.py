from django.urls import path
from .views import OrderCreateView

from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('submit-order/', OrderCreateView.as_view(), name='submit_order'),
]
