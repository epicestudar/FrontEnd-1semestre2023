
function nParImpar() {
    let numero = document.getElementById("nDigitado").value;
    let resto = numero % 2;
    if(resto == 0) {
        alert("Par");
    }
   else{
    alert("Ímpar");
   }
}

function calculador() {
    let numeroUm = parseInt (document.getElementById("nValor1").value);
    let numeroDois = parseInt (document.getElementById("nValor2").value);
    let operacao = document.getElementById("pOperacao").value;
    let resultado;
    switch (operacao) {
        case "+":
            resultado = numeroUm + numeroDois;
            alert(resultado);
            break;

            case "-":
                resultado = numeroUm - numeroDois;
                alert(resultado);
                break;

            case "*":
                resultado = numeroUm * numeroDois;
                alert(resultado);
                break;

            case "/":
                if(numeroDois != 0) {
                   resultado = numeroUm / numeroDois;
                }
                else {
                    alert("Não é possível dividir o número por 0")
                }
    
        default:
            break;
    }
}