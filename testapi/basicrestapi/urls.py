from rest_framework import routers
from .api import Basicviewset

router = routers.DefaultRouter()
router.register('api/basic',Basicviewset,'basic')

urlpatterns = router.urls