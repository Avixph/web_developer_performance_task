from dataclasses import fields
from rest_framework import serializers
from .models import AstraNote


class AstraNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = AstraNote
        fields = ('note_id', "title", "description",
                  "complete", "createdAt", "updatedAt")
