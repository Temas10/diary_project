from rest_framework import serializers
from .models import Thought, GalleryImage, AboutInfo

class ThoughtSerializer(serializers.ModelSerializer):
    class Meta:
        model = Thought
        fields = '__all__'

class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = '__all__'

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutInfo
        fields = '__all__'