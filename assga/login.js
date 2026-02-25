function entrar() {

  const cpf = document.getElementById("cpf").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (!cpf || !senha) {
    alert("Preencha CPF e Senha!");
    return;
  }

  const lista = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuario = lista.find(u => u.cpf === cpf && u.senha === senha);

  if (usuario) {
    localStorage.setItem("clienteLogado", JSON.stringify(usuario));
    window.location.href = "carteira.html";
  } else {
    alert("CPF ou senha inválido!");
  }
}