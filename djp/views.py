from django.shortcuts import render 
# Create your views here.
from django.http import HttpResponse  
from mongoengine import * 
# from pymongo import Connection
import json

def testview(request):  
    ret = "NOT save"
    to_json = {"success": True, "email": ret}
    response = HttpResponse(json.dumps(to_json))
    response["Access-Control-Allow-Origin"] = "*"
    response["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS"
    response["Access-Control-Max-Age"] = "1000"
    response["Access-Control-Allow-Headers"] = "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    return response
#     if request.method == "POST":
#         databaseName = "vanmmm_db"
#         body_unicode = request.body.decode('utf-8')
#         body = json.loads(body_unicode)
#         connection = Connection()
#         
#         db = connection[databaseName]
#         users = db['users']
#         
#         user = {"email": body["email"],"name": body["name"]}
#         
#         
#         users.save(user)
#         for e in users.find({"name":body["name"]}):
#             ret = e["email"]
#             to_json = {"email": ret}
#     return HttpResponse(json.dumps(to_json), content_type="application/json")




