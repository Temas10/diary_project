from django.db import models

class Thought(models.Model):
    title = models.CharField("Тема размышления", max_length=200)
    content = models.TextField("Мысль")
    created_at = models.DateTimeField("Дата записи", auto_now_add=True)
    mood = models.CharField("Настроение", max_length=50, blank=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Запись в дневник"
        verbose_name_plural = "Записи дневника"

    def __str__(self):
        return self.title

class GalleryImage(models.Model):
    image = models.ImageField("Изображение", upload_to='gallery/')
    caption = models.CharField("Подпись", max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Изображение"
        verbose_name_plural = "Галерея"

    def __str__(self):
        return self.caption

class AboutInfo(models.Model):
    bio = models.TextField("История автора")
    philosophy = models.TextField("Философия")

    def __str__(self):
        return "Страница об авторе"
    
    class Meta:
        verbose_name_plural = "Об авторе"