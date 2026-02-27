// 123.456.789-00
// (11) 12345-6789
// 12345-000
 
 
function mascara(formato,objeto){
    campo = eval(objeto);
    separador1 = ".";
    separador2 = "-";
    separador3 = "(";
    separador4 = ")";
 
    conj1= 0;
    conj2= 3;
    conj3= 5;
    conj4 = 7;
    conj5 = 11;
 
    if(formato == 'cpf'){
        if(campo.value.length == conj2){
            campo.value = campo.value + separador1;
        }
        else{
            if (campo.value.length == conj4){
                campo.value = campo.value + separador1;
            }
            else{
                if(campo.value.length == conj5){
                    campo.value = campo.value + separador2;
                }
            }
        }
    }
}
   
 
function somenteNu(e){
    var tecla = e.keyCode?e.keyCode:e.which;
    if((tecla > 47 && tecla < 58 ) || (tecla > 95 && tecla < 106)){
        return true;
    }
    else{
        if(tecla != 8) return false;
        else return true;
    }
}