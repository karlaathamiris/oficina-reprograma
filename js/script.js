var inputsalarioMes = document.querySelector("#ganho-mes")
var inputHoraDia = document.querySelector("#horas-dia")

function calcularValorHora(){      //tudo que tiver dentro da função só vai estar disponível no seu escopo
    var salarioMes = inputsalarioMes.value
    var horasDia = inputHoraDia.value 

    var totalHoraMes = horasDia * 22
    var valorHora = salarioMes / totalHoraMes

    document.querySelector("#resposta").textContent = "R$ " + valorHora.toFixed(2)

}

//textContent pega o valor ao qual está se refereciando
//toFixed é usado pra limitar quantas casas decimais terão
//pra referenciar uma id precisa usar o # antes do nome