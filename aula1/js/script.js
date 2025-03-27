function limparFormulario() {
    document.getElementById('cadastroForm').reset();
    alert('Formulário limpo com sucesso!');
}

document.addEventListener('DOMContentLoaded',
    function () {
        document.getElementById('cadastroForm').addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Dados salvos com sucesso!');
        });
    }); 