# Generated by Django 4.1.7 on 2023-10-22 10:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Request',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reqs', models.CharField(blank=True, max_length=255, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='UserModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('registeree', models.CharField(blank=True, max_length=255, null=True)),
                ('username', models.CharField(blank=True, max_length=255, null=True)),
                ('no', models.IntegerField(blank=True, null=True)),
                ('altno', models.IntegerField(blank=True, null=True)),
                ('email', models.CharField(max_length=255, unique=True)),
                ('password', models.CharField(blank=True, max_length=300, null=True)),
                ('altemail', models.CharField(blank=True, max_length=255, null=True)),
                ('addiction', models.CharField(blank=True, max_length=255, null=True)),
                ('address', models.CharField(blank=True, max_length=100, null=True)),
                ('state', models.CharField(blank=True, max_length=200, null=True)),
                ('gender', models.CharField(blank=True, max_length=200, null=True)),
                ('aadharimg', models.ImageField(blank=True, null=True, upload_to='aadharimgs/')),
                ('profilepic', models.ImageField(blank=True, null=True, upload_to='profilepics/')),
                ('bloodgroup', models.CharField(blank=True, max_length=100, null=True)),
                ('doctorAssigned', models.CharField(blank=True, max_length=255, null=True)),
                ('pincode', models.CharField(blank=True, max_length=255, null=True)),
                ('centerLat', models.CharField(blank=True, max_length=255, null=True)),
                ('centerLong', models.CharField(blank=True, max_length=255, null=True)),
                ('course', models.CharField(blank=True, max_length=200, null=True)),
                ('center', models.CharField(blank=True, max_length=300, null=True)),
                ('is_active', models.BooleanField(default=True)),
                ('is_centeradmin', models.BooleanField(default=False)),
                ('staff', models.BooleanField(default=False)),
                ('admin', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('requests', models.ManyToManyField(blank=True, related_name='users', to='authen.request')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]