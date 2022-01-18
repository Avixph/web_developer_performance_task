# Generated by Django 4.0.1 on 2022-01-18 13:41

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AstraNote',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('note_id', models.UUIDField(default=uuid.uuid4, unique=True)),
                ('title', models.CharField(default='', max_length=70)),
                ('description', models.CharField(default='', max_length=200)),
                ('complete', models.BooleanField(default=False)),
                ('createdAt', models.DateTimeField(auto_now_add=True, verbose_name='Created on ')),
                ('updatedAt', models.DateTimeField(auto_now=True, verbose_name='Updated on ')),
            ],
        ),
    ]
