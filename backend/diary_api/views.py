from rest_framework import viewsets
from .models import Thought, GalleryImage, AboutInfo
from .serializers import ThoughtSerializer, GallerySerializer, AboutSerializer

class ThoughtViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Thought.objects.all()
    serializer_class = ThoughtSerializer

class GalleryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = GalleryImage.objects.all()
    serializer_class = GallerySerializer

class AboutViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AboutInfo.objects.all()
    serializer_class = AboutSerializer