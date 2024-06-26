from django.db import models
from django.contrib.auth.models import BaseUserManager,AbstractBaseUser

class ArrayField(models.TextField):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def from_db_value(self, value, expression, connection):
        if value is None:
            return value
        return value.split(',')

    def to_python(self, value):
        if isinstance(value, list):
            return value
        if value is None:
            return value
        return value.split(',')

    def get_prep_value(self, value):
        if value is None:
            return value
        return ','.join(str(v) for v in value)


class Stock(models.Model):
    stock_id = models.IntegerField(primary_key=True)
    stock_name = models.CharField(max_length=255)
    symbol = models.CharField(max_length=255)
    stock_price = models.DecimalField(decimal_places=3,max_digits=10)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()


class Customer(models.Model):
    Customer_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    email_id = models.CharField(max_length=255)
    password = models.CharField(max_length=16)
    balance = models.DecimalField(decimal_places=3,max_digits=10)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()


class Transaction(models.Model):
    transaction_id = models.IntegerField(primary_key=True)
    user_id = models.ForeignKey(Customer, on_delete=models.CASCADE)
    stock_id = models.ForeignKey(Stock, on_delete=models.CASCADE)
    no_of_shares = models.IntegerField()
    price_of_purchase = models.IntegerField()
    total = models.IntegerField()
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()


class WatchList(models.Model):
    watchlist_id = models.IntegerField(primary_key=True)
    stocks = ArrayField()
    user_id = models.ForeignKey(Customer, on_delete=models.CASCADE)
    stock_id = models.ForeignKey(Stock, on_delete=models.CASCADE)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()

#  Custom User Manager
class UserManager(BaseUserManager):
  def create_user(self, email, name, tc, password=None, password2=None):
      """
      Creates and saves a User with the given email, name, tc and password.
      """
      if not email:
          raise ValueError('User must have an email address')

      user = self.model(
          email=self.normalize_email(email),
          name=name,
          tc=tc,
      )

      user.set_password(password)
      user.save(using=self._db)
      return user

  def create_superuser(self, email, name, tc, password=None):
      """
      Creates and saves a superuser with the given email, name, tc and password.
      """
      user = self.create_user(
          email,
          password=password,
          name=name,
          tc=tc,
      )
      user.is_admin = True
      user.save(using=self._db)
      return user

#  Custom User Model
class User(AbstractBaseUser):
  email = models.EmailField(
      verbose_name='Email',
      max_length=255,
      unique=True,
  )
  name = models.CharField(max_length=200)
  tc = models.BooleanField()
  is_active = models.BooleanField(default=True)
  is_admin = models.BooleanField(default=False)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  objects = UserManager()

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['name', 'tc']

  def __str__(self):
      return self.email

  def has_perm(self, perm, obj=None):
      "Does the user have a specific permission?"
      # Simplest possible answer: Yes, always
      return self.is_admin

  def has_module_perms(self, app_label):
      "Does the user have permissions to view the app `app_label`?"
      # Simplest possible answer: Yes, always
      return True
  
  @property
  def is_staff(self):
      "Is the user a member of staff?"
      # Simplest possible answer: All admins are staff
      return self.is_admin

class StockTransaction(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    symbol = models.CharField(max_length=30)
    quantity = models.IntegerField()
    bidPrice = models.FloatField(null=True)
    type = models.CharField(max_length=30,null=True)
    # cash= models.FloatField(default=100000)

class Holdings(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    symbol = models.CharField(max_length=30)
    holding_count = models.IntegerField()

class Balance(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    cash = models.FloatField(default=1000000)
    mtm = models.FloatField(default=0)

