function atualizarValor() {
    const cursoSelect = document.getElementById('curso');
    const valorSpan = document.getElementById('valorCurso');
    const valor = cursoSelect.options[cursoSelect.selectedIndex].dataset.valor;
    valorSpan.innerText = valor;
}

function registrarCurso() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const cursoSelect = document.getElementById('curso');
    const curso = cursoSelect.value;
    const valor = parseFloat(cursoSelect.options[cursoSelect.selectedIndex].dataset.valor);

    if(!nome || !email || !curso || isNaN(valor)){
        alert("Preencha todos os campos corretamente!");
        return;
    }

    const inscricao = { nome, email, curso, valor };

    const lista = JSON.parse(localStorage.getItem('inscricoesCurso')) || [];
    lista.push(inscricao);
    localStorage.setItem('inscricoesCurso', JSON.stringify(lista));

    alert(`Aluno ${nome} registrado no curso ${curso}!`);

    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    cursoSelect.selectedIndex = 0;
    atualizarValor();

    // Atualiza painel automaticamente
    window.dispatchEvent(new Event('storage'));
}

// Inicializa valor ao carregar página
window.onload = atualizarValor;