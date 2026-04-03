from django.contrib import admin
from .models import UserProfile, Team, Activity, Workout

admin.site.register(UserProfile)
admin.site.register(Team)
admin.site.register(Activity)
admin.site.register(Workout)
