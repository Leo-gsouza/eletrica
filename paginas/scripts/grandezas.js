var tcorrente = window.document.getElementById('icorrente')
var tresistencia = window.document.getElementById('iresistencia')
var tpotencia = window.document.getElementById('ipotencia')
var res = window.document.getElementById('res')
var calcular = window.document.getElementById('calcular')

calcular.addEventListener('mouseenter' , entrou)
calcular.addEventListener('mouseout' , saiu)

function entrou(){
    calcular.style.background = '#F5A302'
    calcular.style.color = '#0C1E34'
}

function saiu(){
    calcular.style.background = '#033C59'
    calcular.style.color = 'white'
}

function tensao(){
    var corrente = Number(tcorrente.value)
    var resistencia = Number(tresistencia.value)
    var potencia = Number(tpotencia.value)

    if (corrente != '' && potencia != '' && resistencia != ''){
        window.alert('Insira apenas 2 grandezas')
    }else{
        if (corrente != '' && resistencia != ''){
            res.innerHTML = `Tensão Elétrica = ${corrente*resistencia}V `
        
            }else if (potencia != '' && corrente != ''){
                res.innerHTML = `Tensão Elétrica = ${potencia/corrente}V `
            }else{
                res.innerHTML = `Tensão Elétrica = ${potencia**0.5*resistencia}V `
            }
    }
}

