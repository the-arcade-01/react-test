from rest_framework import serializers
from basicrestapi.models import Basic 

# basic serializer
class Basicserializer(serializers.ModelSerializer):
    class Meta:
        model = Basic
        fields = '__all__'
        