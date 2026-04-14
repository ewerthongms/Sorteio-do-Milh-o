



function generateNumber(){
    const min = Math.ceil(document.getElementById("input1").value)
    const max = Math.floor(document.getElementById("input2").value)
    const exit = document.getElementById("resultadoo")

    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    
    exit.value = result    
     



}