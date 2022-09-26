from rest_framework.routers import DefaultRouter
from .views import MemberViewSet


router = DefaultRouter()
router.register(r'members', MemberViewSet, basename='member')
urlpatterns = router.urls