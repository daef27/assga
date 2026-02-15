function login() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if (user === "admin" && pass === "123") {
        localStorage.setItem("logado", "sim");
        window.location.href = "area.html";
    } else {
        document.getElementById("msg").innerText = "Usuário ou senha inválidos";
    }
}
