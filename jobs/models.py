from django.db import models
from mongoengine import *

# Create your models here.

class User(Document):
    email = StringField(required=True)
    name = StringField(max_length=50)
