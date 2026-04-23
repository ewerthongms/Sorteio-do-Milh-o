



function generateNumber(){
    const min = Math.ceil(document.getElementById("input1").value)
    const max = Math.floor(document.getElementById("input2").value)
    const exit = document.getElementById("resultadoo")


   

    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    
    exit.value = result  

     if(min >= max){ // O INPUT NUNCA PODERA SER MAIOR QUE O MAXIMO.
        exit.value = alert("O valor mínimo deve ser menor que o valor máximo.");
        exit.classList.add("error");
    }else {const result = Math.floor(Math.random() * (max - min + 1)) + min;
    
    exit.value = result 

    } 
     
}

