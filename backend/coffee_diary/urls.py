from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from diary_api.views import ThoughtViewSet, GalleryViewSet, AboutViewSet

router = DefaultRouter()
router.register(r'thoughts', ThoughtViewSet)
router.register(r'gallery', GalleryViewSet)
router.register(r'about', AboutViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]