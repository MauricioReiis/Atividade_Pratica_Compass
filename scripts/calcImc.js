export default function CalcImc(){
    const $ = document.querySelector.bind(document)

    const peso = $("#pesoRange")
    const valorPeso = $("#valorPeso")

    const altura = $("#alturaRange")
    const valorAltura = $("#valorAltura")

    const calculoIMC = $("#calculo")

    peso.oninput = function() {
        valorPeso.innerHTML = peso.value;
    }

    altura.oninput = function() {
        valorAltura.innerHTML = altura.value/100;
    }

    button.addEventListener("click", () => {

        let valorAltura = altura.value/100
        let imc = peso.value / (valorAltura * valorAltura);
        let condicao = ""

        if(imc <= 18.5){
            condicao = "Abaixo do Peso"

        } else if(imc <= 24.9){
            condicao = "Peso Normal"

        } else if(imc <= 29.9){
            condicao = "Sobrepeso"

        } else if(imc <= 34.9){
            condicao = "Obesidade Grau I"

        } else if(imc <= 39.9){
            condicao = "Obesidade Grau II"

        } else if(imc > 40){
            condicao = "Obesidade Mórbida"

        } 

        calculoIMC.textContent = `IMC: ${imc.toFixed(2)} (${condicao}).`
 })
}