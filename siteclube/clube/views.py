from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from django.core.mail import send_mail
from django.conf import settings
from .models import Evento, Socio
from .models import Pagamento
from django.http import HttpResponse

def teste(request):
    return HttpResponse("Funcionando!")


@login_required
def lista_pagamentos(request):
    pagamentos = Pagamento.objects.all()
    return render(request, "pagamentos.html", {"pagamentos": pagamentos})


@login_required
def painel(request):
    total_socios = Socio.objects.count()
    total_eventos = Evento.objects.count()

    contexto = {
        "total_socios": total_socios,
        "total_eventos": total_eventos,
    }

    return render(request, "painel.html", contexto)


def contato(request):
    if request.method == "POST":
        nome = request.POST.get("nome")
        email = request.POST.get("email")
        mensagem = request.POST.get("mensagem")

        mensagem_completa = f"""
        Nome: {nome}
        Email: {email}

        Mensagem:
        {mensagem}
        """

        send_mail(
            "Contato pelo site ASSGA",
            mensagem_completa,
            settings.EMAIL_HOST_USER,
            ["seuemail@gmail.com"],
        )

        return render(request, "contato.html", {"sucesso": True})

    return render(request, "contato.html")


def home(request):
    return render(request, 'home.html')

@login_required
def painel(request):
    return render(request, 'painel.html')

def sair(request):
    logout(request)
    return redirect('/admin/login/')

def historia(request):
    return render(request, 'historia.html')

def diretoria(request):
    return render(request, 'diretoria.html')

def estatuto(request):
    return render(request, 'estatuto.html')

def contato(request):
    return render(request, 'contato.html')
