# Generated by Django 4.1.1 on 2022-09-18 19:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_member_phone_number_of_spouse'),
    ]

    operations = [
        migrations.AlterField(
            model_name='member',
            name='phone_number_of_spouse',
            field=models.IntegerField(blank=True, default=1, null=True),
        ),
    ]