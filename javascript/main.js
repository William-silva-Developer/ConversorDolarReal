


function Convert() {
    
    let dolar = parseFloat(document.getElementById("converter").value)
    
    let real = 5
    
    let conversao = dolar * real
    let conversaoFinal = conversao.toFixed(1)
    document.getElementById("result").innerHTML = "O valor em R$ " + conversaoFinal 
    
    console.log(conversao)



}

