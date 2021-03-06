# from turtle import title
import uuid
from django.db import models

# Create your models here.


class AstraNote(models.Model):
    id = models.UUIDField(primary_key=True,
                          default=uuid.uuid4, editable=False, unique=True)
    title = models.CharField(max_length=70, blank=False,
                             default='')
    description = models.CharField(max_length=200, blank=False, default='')
    complete = models.BooleanField(default=False)
    createdAt = models.DateTimeField(
        "Created on ", auto_now_add=True, blank=False)
    updatedAt = models.DateTimeField("Updated on ", auto_now=True, blank=False)
