let nome = parseFloat(prompt("digite seu nome"))
let peso = parseFloat(prompt("digite seu peso (Kg): "))
let altura = parseFloat(prompt("informe sua altura (m)"))
gerarRelatorio(peso, altura);
let resultado = calcularIMC(peso, altura)

function calcularIMC(peso, altura){
 return peso / (altura * altura)
}


function classificarIMC(imc){

    if (imc < 18.5){
        alert("abaixo do peso: " + imc);
    }
    else if (imc < 25){
        alert ("normal: " + imc);
    }
     else if (imc < 35){
        alert ("acima do peso: " + imc)
    }    
}
    function gerarRelatorio(peso, altura){
     let imc = calcularIMC(peso,altura)
     classificarIMC(imc)
    }

