from movieratings.models import Movie
from django.contrib import admin

class MovieAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'rating')
    list_filter = ['rating']
    search_fields = ['name']
    
admin.site.register(Movie, MovieAdmin)
