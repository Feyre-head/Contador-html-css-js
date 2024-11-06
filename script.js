function contador() {
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value

    var msg = document.getElementById('msg')
    msg.innerHTML = ''

    // Verificar se os campos estão vazios
    if (inicio === '' || fim === '') {
        msg.innerHTML = 'Por favor, preencha todos os campos!'
        return; // Saia da função se algum campo estiver vazio
    }

    // Converter para número após a validação de não vazio
    inicio = Number(inicio)
    fim = Number(fim)
    passo = Number(passo)

    if (passo <= 0) {
        msg.innerHTML = `Valor de Passo Inválido! Passo não pode ser 0 ou negativo.`
        return; // Saia da função se a condição não for atendida
    }

    msg.innerHTML = ''
    for (var i = inicio; i <= fim; i += passo) {
        msg.innerHTML += i + " " 
    }
}
