from django.shortcuts import render
from rest_framework import viewsets

from api.serializer import MemberSerializer
from .models import Member

# Create your views here.
class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer