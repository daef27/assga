from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('painel/', views.painel, name='painel'),
    path('logout/', views.sair, name='logout'),
    path('historia/', views.historia, name='historia'),
    path('diretoria/', views.diretoria, name='diretoria'),
    path('estatuto/', views.estatuto, name='estatuto'),
    path('contato/', views.contato, name='contato'),
    path('logout/', views.sair, name='logout'),
]
