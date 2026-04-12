
const meubt = document.getElementById("botao")
const mensagemParabens = document.getElementById("parabens")

const cores = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff'];
let indice = 0;

function animarFundo() {
  document.body.style.backgroundColor = cores[indice];
  indice = (indice + 1) % cores.length; // Volta ao início após a última cor
}

setInterval(animarFundo, 100);


function botaoRandom() {
    const minimo = document.getElementById("input1")
    const maximo = document.getElementById("input2")
    const Result = document.getElementById("resultadoo")


    const valormin = parseInt(minimo.value)
    const valormax = parseInt(maximo.value)

   if (mensagemParabens) {
        mensagemParabens.textContent = "Parabéns!"; 
        mensagemParabens.style.position = "relative"; // Necessário para o left funcionar
        mensagemParabens.style.left = "105px";         // Adiciona os 20px
    }

    if ( isNaN(valormin) || isNaN(valormax)) {
        Result.value = "Preencha os dois campos!"
        return false
    }

    if(valormin >= valormax) {
        Result.value = "O mínimo deve ser menor que o maximo"
        return false
    }
    
    

    const Saida = Math.floor(Math.random() * (valormax - valormin + 1)) + valormin;

    Result.value =  Saida;

     

    return true;
    
}



   

