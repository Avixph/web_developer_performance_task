# from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework import status

from .models import AstraNote
from .serializers import AstraNoteSerializer
# Create your views here.


@api_view(['GET', 'POST'])
def astra_note_list(request):
  # Get all the notes
    if request.method == 'GET':
        notes = AstraNote.objects.all()

        title = request.GET.get('title', None)
        if title is not None:
            notes = AstraNote.objects.filter(title__icontains=title)
            # notes.filter(title__icontains=title)

        notes_serializer = AstraNoteSerializer(
            notes, context={'request': request}, many=True)
        return JsonResponse(notes_serializer.data, safe=False) and Response(notes_serializer.data)
        # 'safe=False' for objects serialization
# Create a note
    elif request.method == 'POST':
        note_data = JSONParser().parse(request)
        note_serializer = AstraNoteSerializer(data=note_data)
        if note_serializer.is_valid():
            note_serializer.save()
            return JsonResponse(note_serializer.data, status=status.HTTP_201_CREATED) and Response(status=status.HTTP_201_CREATED)
        return JsonResponse(note_serializer.errors, status=status.HTTP_400_BAD_REQUEST) and Response(note_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def note_detail(request, pk):
    try:
        note = AstraNote.objects.get(pk=pk)
    except AstraNote.DoesNotExist:
        return JsonResponse({'message': 'Note does not exist!'}, status=status.HTTP_404_NOT_FOUND) and Response({'message': 'Note does not exist!'}, status=status.HTTP_404_NOT_FOUND)
#  Get a note by ID
    if request.method == 'GET':
        note_serializer = AstraNoteSerializer(note)
        return JsonResponse(note_serializer.data) and Response(note_serializer.data)
 #  update a note by ID
    elif request.method == 'PUT':
        note_data = JSONParser().parse(request)
        note_serializer = AstraNoteSerializer(note, data=note_data)
        if note_serializer.is_valid():
            note_serializer.save()
            return JsonResponse({'message': 'Note was updated successfully!'}, note_serializer.data, status=status.HTTP_204_NO_CONTENT) and Response({'message': 'Note was updated successfully!'}, note_serializer.data, status=status.HTTP_204_NO_CONTENT)
        return JsonResponse(note_serializer.errors, status=status.HTTP_400_BAD_REQUEST) and Response(note_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 #  Delete a note by ID
    elif request.method == 'DELETE':
        note.delete()
        return JsonResponse({'message': 'Note was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT) and Response({'message': 'Note was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def note_completed_list(request):
    notes = AstraNote.objects.filter(published=True)
# get all notes marked as complete
    if request.method == 'GET':
        notes_serializer = AstraNoteSerializer(notes, many=True)
        return JsonResponse(notes_serializer.data, safe=False) and Response(notes_serializer.data)
