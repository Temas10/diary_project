from django.contrib import admin
from .models import Thought, GalleryImage, AboutInfo

@admin.register(Thought)
class ThoughtAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'mood')

@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ('caption', 'created_at')

@admin.register(AboutInfo)
class AboutInfoAdmin(admin.ModelAdmin):
    pass