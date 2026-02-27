const pwEL = document.getElementById('pw');
const copyEL = document.getElementById('copy');
var lenEL = document.getElementById('length');
const upperEL = document.getElementById('upper');
const lowerEL = document.getElementById('lower');
const numberEL = document.getElementById('number');
const symbolEL = document.getElementById('symbol');
const generateEL = document.getElementById('generate');
 
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%&*()_+~|}{[]:;?><,./-=";
 
 
function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}
 
function generatePassword() {
    const len = lenEL.value;
    if(len == "" || len <= 0){
        alert("Por favor, insira um tamanho válido para a senha.");
        //lenEl.focus();
        return;
    }
    let password = "";
 
    for (let i = 0; i < len; i++) {
        const x = generateX();
        password += x;
    }
    pwEL.innerText = password;
 
}
 
function generateX() {
    const xs = [];
    if (upperEL.checked) {
        xs.push(getUppercase());
    }
    if (lowerEL.checked) {
        xs.push(getLowercase());
    }
    if (numberEL.checked) {
        xs.push(getNumber());
    }
    if (symbolEL.checked) {
        xs.push(getSymbol());
    }
    return xs[Math.floor(Math.random() * xs.length)];
}
 
generateEL.addEventListener("click", generatePassword);
copyEL.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwEL.innerText;
    if(!password){
        alert("Nada para copiar! Gere uma senha primeiro.");
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Senha copiada para a área de transferência: " + password)
 
})