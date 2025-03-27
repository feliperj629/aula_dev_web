document.getElementById('calculadoraForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const operacao = document.getElementById('operacao').value;



    switch (operacao) {
        case '+':
            resultado = numero1 + numero2;
            mensagem = `${numero1} + ${numero2} = ${resultado}`;
            break;
        case '-':
            resultado = numero1 - numero2;
            mensagem = `${numero1} - ${numero2} = ${resultado}`;
            break;
        case '*':
            resultado = numero1 * numero2;
            mensagem = `${numero1} × ${numero2} = ${resultado}`;
            break;
        case '/':
            if (numero2 === 0) {
                alert('Erro: Divisão por zero não é permitida!');
                return;
            }
            resultado = numero1 / numero2;
            mensagem = `${numero1} ÷ ${numero2} = ${resultado}`;
            break;
        case '%':
            resultado = (numero1 * numero2) / 100;
            mensagem = `${numero2}% de ${numero1} = ${resultado}`;
            break;
    }

    alert(mensagem);

});