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

});


function pegaValores (nome, tipo , valor) {
    expenseTracker.push({
        nome: nome,
        tipo: tipo,
        valor: valor
    });

    console.log(expenseTracker)
};