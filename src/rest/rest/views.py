from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json, logging, os
from pymongo import MongoClient
from bson.objectid import ObjectId

mongo_uri = "mongodb://{}:{}".format(os.environ["MONGO_HOST"], os.environ["MONGO_PORT"])
db = MongoClient(mongo_uri)["test_db"]
todo_collection = db["todos"]

class TodoListView(APIView):

    def get(self, request):
        try:
            todos = list(todo_collection.find({}, {"text": 1}))
            for todo in todos:
                todo["_id"] = str(todo["_id"])     
            
            return Response(todos, status=status.HTTP_200_OK)

        except Exception as e:
            logging.error(str(e))
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request):
        try:
            text = request.data.get("text", "")

            if not text:
                return Response({"error": "Text is required"}, status=status.HTTP_400_BAD_REQUEST)

            inserted = todo_collection.insert_one({"text": text})
            new_todo = {"_id": str(inserted.inserted_id), "text": text}

            return Response(new_todo, status=status.HTTP_201_CREATED)

        except Exception as e:
            logging.error(str(e))
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
