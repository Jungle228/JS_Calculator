"use strict"

function clicked(text){
    document.getElementById("texting").value += text
}

function equalsCalc(){
    try{
        document.getElementById("texting").value = ExpressionEstimator.calculate(document.getElementById("texting").value)
    } catch {
        document.getElementById("texting").value = 'Что-то пошло не так, бро)'
    }    
}

function resetTB(){
    document.getElementById("texting").value = ""
}

function сTB(){
    document.getElementById("texting").value = document.getElementById("texting").value.slice(0, -1)
}