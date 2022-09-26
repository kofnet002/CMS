from django.db import models

Gender_Type = (
        ("Male", "Male"),
        ("Female", "Female"),
)

Marriage_Type = (
        ("Single", "Single"),
        ("Married", "Married"),
        ("Divorce", "Divorce"),
         ("Widow", "Widow"),
)

Baptism_Type = [
    ("Yes", "Yes"),
    ("No", "No"),
]

# Create your models here.
class Member(models.Model):
    Gender_Type = (
        ("Male", "Male"),
        ("Female", "Female"),
)
    Marriage_Type = (
            ("Single", "Single"),
            ("Married", "Married"),
            ("Divorce", "Divorce"),
            ("Widow", "Widow"),
)

    Baptism_Type = [
        ("Yes", "Yes"),
        ("No", "No"),
    ]

    first_name = models.CharField(max_length=50, null=True)
    middle_name = models.CharField(max_length=50,blank=True, null=True)
    last_name = models.CharField(max_length=50, null=True)
    age = models.IntegerField(null=True)
    gender = models.CharField(choices=Gender_Type, default='', max_length=10)
    resident = models.CharField(max_length=50)
    occupation = models.CharField(max_length=50, blank=True, null=True)
    mobile_number = models.IntegerField(null=True)
    registration_date = models.DateField(null=True)
    date_of_birth = models.DateField(null=True)
    marital_status = models.CharField(choices=Marriage_Type, default='', max_length=10)
    name_of_spouse = models.CharField(max_length=50, blank=True, null=True, default='')
    phone_number_of_spouse = models.IntegerField(null=True, blank=True, default=1)
    baptism = models.CharField(choices=Baptism_Type, max_length=10)
    church_of_baptism = models.CharField(max_length=70, blank=True, null=True)
    emergency_contact_person = models.CharField(max_length=50, null=True)
    emergency_contact_number = models.IntegerField(null=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    # photo
    # department = models.CharField(max_length=20)


    def __str__(self):
        return f" Members - {self.first_name}"