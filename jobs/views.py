from django.shortcuts import render 
# Create your views here.
from django.http import HttpResponse  
from models import User  
from mongoengine import * 
from pymongo import Connection
import json
from django.http import JsonResponse

def testview(request):  
    ret = "NOT save"
    
    if request.method == "POST":
        databaseName = "vanmmm_db"
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        connection = Connection()
        
        db = connection[databaseName]
        users = db['users']
        
        user = {"email": body["email"],"name": body["name"]}
        
        
        users.save(user)
        for e in users.find({"name":body["name"]}):
            ret = e["email"]
            to_json = {"email": ret}
    return  JsonResponse(to_json)#HttpResponse(json.dumps(to_json), content_type="application/json")


