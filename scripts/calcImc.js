export default function CalcImc(){
    const $ = document.querySelector.bind(document)

    const peso = $("#pesoRange")
    const altura = $("#alturaRange")
    const calculoIMC = ("#CalculoImc h1")

    // let imc = kilos / (altura * altura);

    peso.addEventListenner("input", () => {
        if(peso.value === 18.5){
            calculoIMC.textContent = "Abaixo do Peso"

        } else if (peso.value >= 18.5 && peso.value <= 24.9){
            calculoIMC.textContent = "Peso Normal"

        } else if (peso.value >= 25 && peso.value <= 29.9){
            calculoIMC.textContent = "Sobrepeso"

        } else if(peso.value >= 30 && peso.value <= 34.9){
            calculoIMC.textContent = "Obesidade Grau I"

        }else if(peso.value >= 35 && peso.value <= 39.9){
            calculoIMC.textContent = "Obesidade Grau II"

        }else if(peso.value > 40){
            calculoIMC.textContent = "Obesidade Mórbida"
        }   
    })
}