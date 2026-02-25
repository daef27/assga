// Máscara CPF
document.getElementById("adminCpf").addEventListener("input", function(e) {
  let value = e.target.value.replace(/\D/g, "");

  if (value.length > 11) value = value.slice(0,11);

  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  e.target.value = value;
});

document.getElementById("adminForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const cpf = document.getElementById("adminCpf").value;
  const senha = document.getElementById("adminSenha").value;
  const mensagem = document.getElementById("adminMensagem");

  // CPF e senha fixa do responsável (exemplo)
  const cpfAdmin = "000.000.000-00";
  const senhaAdmin = "1234";

  if (cpf === cpfAdmin && senha === senhaAdmin) {
    localStorage.setItem("adminLogado", "true");
    mensagem.style.color = "green";
    mensagem.textContent = "Login Admin realizado!";

    setTimeout(() => {
      window.location.href = "painel-admin.html";
    }, 1000);

  } else {
    mensagem.style.color = "red";
    mensagem.textContent = "CPF ou senha inválidos!";
  }
});



function registrar() {

  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const rg = document.getElementById("rg").value;
  const socio = document.getElementById("socio").value;
  const senha = document.getElementById("senha").value;
  const tipo = document.getElementById("tipo").value;
  const fotoInput = document.getElementById("foto");

  if (senha.length !== 4) {
    alert("Senha deve ter 4 números!");
    return;
  }

  const reader = new FileReader();
  reader.onload = function() {

    const pessoa = {
      nome,
      cpf,
      rg,
      socio,
      senha,
      tipo,
      foto: reader.result
    };

    let lista = JSON.parse(localStorage.getItem("usuarios")) || [];
    lista.push(pessoa);
    localStorage.setItem("usuarios", JSON.stringify(lista));

    mostrarLista();
    alert("Cadastrado com sucesso!");
  }

  if (fotoInput.files[0]) {
    reader.readAsDataURL(fotoInput.files[0]);
  }
}

function mostrarLista() {

  const lista = JSON.parse(localStorage.getItem("usuarios")) || [];
  const div = document.getElementById("lista");
  div.innerHTML = "";

  lista.forEach(p => {
    div.innerHTML += `
      <div class="card">
        <img src="${p.foto}">
        <p><strong>${p.nome}</strong></p>
        <p>CPF: ${p.cpf}</p>
        <p>Tipo: ${p.tipo}</p>
      </div>
    `;
  });
}

mostrarLista();