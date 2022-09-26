from django.contrib import admin

from api.models import Member

# Register your models here.
@admin.register(Member)
class MemberModel(admin.ModelAdmin):
    list_display = ('id', 'first_name','middle_name', 'last_name',
                     'age', 'gender', 'resident', 'occupation',
                     'mobile_number','registration_date', 'date_of_birth',
                     'marital_status', 'name_of_spouse', 'phone_number_of_spouse',
                     'baptism', 'church_of_baptism', 'emergency_contact_person',
                     'emergency_contact_number')
    
    list_filter = ('id', 'first_name')
    ordering = ('id',)