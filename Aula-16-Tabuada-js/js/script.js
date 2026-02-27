function boasVindas(){
    document.getElementById("mensagem").innerText = "Texto inserido através de JS";
}
function tabuada(){
    resp = "";
    for(i=0; i<11; i++){    
        resp += "1 * " + i + " = " + (1 * i) + "\n";
    }
    document.getElementById("tabuada").innerText = resp;
}

function calcTabuada(){
    num = document.getElementById("num");
    resp = "";

    if((num.value >= 1 ) && (num.value < 11)){
        for(i=0; i<11; i++){    
            resp += num.value + " * " + i + " = " + (num.value * i) + "\n";
        }
    }
    else{
        alert("Digite um valor entre 1 e 10");
        resp = "Digite um valor entre 1 e 10";
        num.value = "";
        num.focus();
    }
    
    document.getElementById("tabuada2").innerText = resp;
}