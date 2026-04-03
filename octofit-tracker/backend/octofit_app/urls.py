from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import api_root, UserProfileViewSet, TeamViewSet, ActivityViewSet, WorkoutViewSet

router = DefaultRouter()
router.register(r'users', UserProfileViewSet)
router.register(r'teams', TeamViewSet)
router.register(r'activities', ActivityViewSet)
router.register(r'workouts', WorkoutViewSet)

urlpatterns = [
    path('', api_root, name='api-root'),
    path('', include(router.urls)),
]
