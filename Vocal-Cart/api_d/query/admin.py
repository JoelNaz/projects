from django.contrib import admin
from .models import UserModel
from .models import SearchQuery

class SearchQueryAdmin(admin.ModelAdmin):
    list_display = ('user', 'query', 'created_at') 


admin.site.register(SearchQuery, SearchQueryAdmin)
admin.site.register(UserModel)