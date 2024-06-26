# from django import views
from django.contrib import admin
from django.urls import path, include
from .views import (
    GetBalance,
    GetStockTransactions,
    BuyStock,
    GetHoldings,
    SellStock,
    UserRegistrationView,
    UserLoginView,
    UserProfileView,
    UserChangePasswordView,
    SendPasswordResetEmailView,
    UserPasswordResetView,
)

urlpatterns = [
    # path('', YourHomeView.as_view(),name='index'),
    path("buyStock", BuyStock.as_view()),
    path("sellStock", SellStock.as_view()),
    path("getHoldings", GetHoldings.as_view()),
    path("getStockTransactions", GetStockTransactions.as_view()),
    path("getBalance", GetBalance.as_view()),
    path("register/", UserRegistrationView.as_view(), name="register"),
    path("login/", UserLoginView.as_view(), name="login"),
    path("profile/", UserProfileView.as_view(), name="profile"),
    path("changepassword/", UserChangePasswordView.as_view(), name="changepassword"),
    path(
        "send-reset-password-email/",
        SendPasswordResetEmailView.as_view(),
        name="send-reset-password-email",
    ),
    path(
        "reset-password/<uid>/<token>/",
        UserPasswordResetView.as_view(),
        name="reset-password",
    ),
   
]
