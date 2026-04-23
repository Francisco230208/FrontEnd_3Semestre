function calcular() {
    // alert("Função calcular() Rodando...")

    // Pegando os valores dos campos de entrada
    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    //exibindo os valores no console para teste
    console.log("Nome: " + nome);
    console.log("Peso: " + peso);
    console.log("Altura: " + altura);

    //verifica se tem campo para preencher 
    //dar mensagem de erro caso não tenha
    if(nome.trim().length == 0 || isNaN(altura) || isNaN(peso)){

        alert("Por favor, preencha todos os campos.");
        return false;
    }

    console.log("Liberado para cadastrar")
}
