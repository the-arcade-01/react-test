from basicrestapi.models import Basic
from rest_framework import viewsets, permissions
from .serializer import Basicserializer

# basic viewset
class Basicviewset(viewsets.ModelViewSet):
    queryset = Basic.objects.all()
    permissions_classes = {
        permissions.AllowAny
    }
    serializer_class = Basicserializer