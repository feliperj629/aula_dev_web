function limparFormulario() {
    document.getElementById('cadastroForm').reset();
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('cadastroForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Dados salvos com sucesso!');
    });
}); 