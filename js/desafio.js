var inputValorHora = document.querySelector("#valor-hora")
var inputHorasProjeto = document.querySelector("#horas-projeto")

function calcularValorTrabalho(){      
    var horasTrab = inputValorHora.value
    var horasProjeto = inputHorasProjeto.value 

   var valorProjeto = horasTrab * horasProjeto

    document.querySelector("#resposta").textContent = "R$ " + valorProjeto.toFixed(2)

}

function resetar(){
    document.querySelector("#valor-hora").value = ""
    document.querySelector("#horas-projeto").value = ""
    document.querySelector("#resposta").textContent = "R$ 0,00"
}