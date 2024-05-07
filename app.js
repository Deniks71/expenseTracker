let expenseTracker = [];

// Event Listener para click no botao ADD.
document.querySelector('.button-input').addEventListener('click', () => {

    // Dados do nome da entrada ou saida
    let nomeInputElement = document.querySelector('.nome-input');
    let nome = nomeInputElement.value
   
    // Dados da lista suspensa Entrada ou saida.
    let listaElement = document.querySelector('.lista-suspensa-input')
    let listaSuspensa = listaElement.value

    // valor da entrada ou saida
    let valorElement = document.querySelector('.valor-input')
    let valor = valorElement.value

    pegaValores(nome, listaSuspensa,valor);
    calculaTotais ();

});


function pegaValores (nome, tipo , valor) {
    let outputDivHtml = '';
    let sinal = '';
    expenseTracker.push({
        nome: nome,
        tipo: tipo,
        valor: valor
    });
    
    expenseTracker.forEach((expense) => {
        if (expense.tipo === 'entrada') {
            sinal = '+'
        } else {
            sinal = '-'
        }
        
        let html = `<p>${expense.nome}: R$ ${sinal}${expense.valor} <button>Delete</button></p>`

        outputDivHtml += html

    })
    document.querySelector('.output-div').innerHTML = outputDivHtml;
};



function calculaTotais () {
    let entradaTotal = 0;
    let saidaTotal = 0; 
    let restante = 0;
    for (let i = 0; i < expenseTracker.length; i++ ) {
        if (expenseTracker[i].tipo === 'entrada'){
            entradaTotal += Number(expenseTracker[i].valor)
        } else {
            saidaTotal += Number(expenseTracker[i].valor)
        } 
    }

    restante = entradaTotal - saidaTotal

    document.querySelector('.totais-div').innerHTML = `<p>Total Recbido: R$: ${entradaTotal}</p>
        <p>Total Gasto: R$: ${saidaTotal}</p>
        <p>Restante: R$: ${restante} </p>`
}

/*document.querySelector('.totais-div').innerHTML = `<p>Total Recbido: R$: ${totalEntrada}</p>
    <p>Total Gasto: R$: ${totalSaida}</p>
    <p>Restante: R$: ${restante} </p>`
*/