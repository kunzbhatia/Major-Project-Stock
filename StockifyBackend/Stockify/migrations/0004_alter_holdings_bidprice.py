# Generated by Django 4.0.3 on 2023-03-20 18:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Stockify', '0003_holdings_bidprice'),
    ]

    operations = [
        migrations.AlterField(
            model_name='holdings',
            name='bidPrice',
            field=models.FloatField(null=True),
        ),
    ]