from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import UserProfile, Team, Activity, Workout
from .serializers import UserProfileSerializer, TeamSerializer, ActivitySerializer, WorkoutSerializer

@api_view(['GET'])
def api_root(request):
    return Response({
        'users': 'api/users/',
        'teams': 'api/teams/',
        'activities': 'api/activities/',
        'workouts': 'api/workouts/',
    })

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class WorkoutViewSet(viewsets.ModelViewSet):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer
