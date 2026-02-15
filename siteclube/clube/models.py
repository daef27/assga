from django.db import models
from django.contrib.auth.models import User

class Evento(models.Model):
    titulo = models.CharField(max_length=200)
    descricao = models.TextField()
    data = models.DateField()

    def __str__(self):
        return self.titulo


class Noticia(models.Model):
    titulo = models.CharField(max_length=200)
    conteudo = models.TextField()
    data = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo

class Socio(models.Model):
    nome = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    # outros campos

    def __str__(self):
        return self.nome

class Pagamento(models.Model):
    socio = models.ForeignKey(Socio, on_delete=models.CASCADE)
    valor = models.DecimalField(max_digits=8, decimal_places=2)
    data = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.socio.nome} - {self.valor}"
