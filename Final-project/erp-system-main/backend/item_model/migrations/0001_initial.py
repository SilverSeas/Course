# Generated by Django 4.2 on 2023-04-20 08:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ItemModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('release_date', models.DateTimeField(auto_now_add=True)),
                ('is_archived', models.BooleanField(default=False)),
                ('archiving_date', models.DateTimeField(blank=True, null=True)),
                ('status', models.CharField(choices=[('Active', 'Active'), ('Sell off', 'Sell off')], default='Active')),
                ('name', models.CharField(max_length=50, unique=True)),
                ('condition', models.CharField(choices=[('New', 'New'), ('Used', 'Used')])),
                ('category', models.CharField(choices=[('Shoes', 'Shoes'), ('Apparel', 'Apparel')])),
                ('color', models.CharField(blank=True, choices=[('Beige', 'Beige'), ('Black', 'Black'), ('Blue', 'Blue'), ('Brown', 'Brown'), ('Green', 'Green'), ('Red', 'Red'), ('Yellow', 'Yellow'), ('White', 'White')], max_length=50, null=True)),
                ('brand_name', models.CharField(blank=True, max_length=50, null=True)),
                ('has_specifications', models.BooleanField(default=False)),
            ],
        ),
    ]