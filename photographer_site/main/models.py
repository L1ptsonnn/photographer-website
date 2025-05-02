from django.db import models


class Order(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()


class Feedback(models.Model):
    name = models.CharField(max_length=100)
    text = models.TextField()
