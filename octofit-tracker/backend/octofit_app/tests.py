from django.test import TestCase
from .models import UserProfile

class UserProfileModelTest(TestCase):
    def test_userprofile_creation(self):
        user = UserProfile.objects.create(name='Test User', email='test@example.com')
        self.assertEqual(str(user), 'Test User')
