valor1 = parseInt(prompt("Digite o primeiro valor:")); // 
valor2 = parseInt(prompt("Digite o segundo valor:"));
/* 
   parseInt()   converte STRING para NÚMERO INTEIRO 7.56789 => 7
   parseFloat() converte STRING para NÚMERO DECIMAL 7.56789 => 7.56789
*/
soma = valor1 + valor2;
alert("A soma dos valores é: " + parseInt(soma)); // + operador de concatenação, junta STRINGS
function exibirFrase() {
    frase="";
    for (i = 1; i <= 10; i++) {
        frase += "Linha " + i + ": Uma frase aí";
    }
    document.getElementById("msg").innerText = frase;
}
function exibirMensagem() {
    mensagem = "Olá, mundo!";
    // console.log(mensagem);
    document.getElementById("container").innerText = mensagem;
}