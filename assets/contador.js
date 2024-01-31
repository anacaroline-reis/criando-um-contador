let numero_inicial_Wrapper = document.getElementById("numero-inicial");
let numero_inicial=0;

function incremento(){
    numero_inicial = numero_inicial + 1 ;
    numero_inicial_Wrapper.innerHTML = numero_inicial;
}

function decremento(){
    numero_inicial = numero_inicial - 1 ;
    numero_inicial_Wrapper.innerHTML = numero_inicial;
}
