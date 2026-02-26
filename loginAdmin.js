function loginAdmin() {
    const cpf = document.getElementById('cpf').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const msgErro = document.getElementById('msgErro');

    // CPF e senha pré-definidos do admin
    const adminCPF = "12345678900"; 
    const adminSenha = "admin123";  

    if(cpf === adminCPF && senha === adminSenha){
        // Redireciona para painel admin
        window.location.href = "painelAdminCurso.html";
    } else {
        msgErro.innerText = "CPF ou senha incorretos!";
    }
}