from rest_framework import serializers
from .models import UserProfile, Team, Activity, Workout

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['id', 'name', 'email', 'created_at']

class TeamSerializer(serializers.ModelSerializer):
    members = UserProfileSerializer(many=True, read_only=True)

    class Meta:
        model = Team
        fields = ['id', 'name', 'members', 'created_at']

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ['id', 'user', 'name', 'duration_minutes', 'distance_km', 'created_at']

class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        fields = ['id', 'user', 'title', 'description', 'scheduled_date']
