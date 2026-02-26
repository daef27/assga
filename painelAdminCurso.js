const tbody = document.querySelector('#tabelaInscricoes tbody');
const filtroCurso = document.getElementById('filtrarCurso');
const totalSpan = document.getElementById('totalArrecadado');

let inscricoes = JSON.parse(localStorage.getItem('inscricoesCurso')) || [];

// Preenche filtro com cursos disponíveis
function atualizarFiltro() {
    const cursos = [...new Set(inscricoes.map(i => i.curso))];
    filtroCurso.innerHTML = '<option value="Todos">Todos</option>';
    cursos.forEach(c => {
        const option = document.createElement('option');
        option.value = c;
        option.innerText = c;
        filtroCurso.appendChild(option);
    });
}

// Atualiza tabela
function atualizarTabela() {
    tbody.innerHTML = '';
    let total = 0;
    const filtro = filtroCurso.value;

    const listaFiltrada = inscricoes.filter(item =>
        filtro === 'Todos' || item.curso === filtro
    );

    if (listaFiltrada.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center; padding:20px; color:#00ffff;">
                    Nenhum aluno inscrito até o momento.
                </td>
            </tr>
        `;
        totalSpan.innerText = "0.00";
        return;
    }

    listaFiltrada.forEach((item,index) => {
        total += parseFloat(item.valor);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.nome}</td>
            <td>${item.email}</td>
            <td>${item.curso}</td>
            <td>${parseFloat(item.valor).toFixed(2)}</td>
            <td><button class="btn-excluir" onclick="excluir(${index})">Excluir</button></td>
        `;
        tbody.appendChild(tr);
    });

    totalSpan.innerText = total.toFixed(2);
}

// Excluir inscrição
function excluir(index) {
    inscricoes.splice(index,1);
    localStorage.setItem('inscricoesCurso',JSON.stringify(inscricoes));
    atualizarFiltro();
    atualizarTabela();
}

// Atualiza lista automaticamente quando localStorage muda
window.addEventListener('storage', () => {
    inscricoes = JSON.parse(localStorage.getItem('inscricoesCurso')) || [];
    atualizarFiltro();
    atualizarTabela();
});

// Inicializa painel
atualizarFiltro();
atualizarTabela();