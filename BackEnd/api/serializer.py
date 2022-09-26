from rest_framework import serializers
from .models import Member

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ("__all__"
            # (   'id', 'first_name','middle_name', 'last_name',
            #     'age', 'gender', 'resident', 'occupation',
            #     'mobile_number','registration_date', 'date_of_birth',
            #     'marital_status', 'name_of_spouse', 'phone_number_of_spouse',
            #     'baptism', 'church_of_baptism', 'emergency_contact_person',
            #     'emergency_contact_number')
    )