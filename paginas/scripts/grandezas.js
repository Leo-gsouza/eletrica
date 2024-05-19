var vCorrenteTx = window.document.getElementById('corrente-v')
var vResistenciaTx = window.document.getElementById('resistencia-v')
var vPotenciaTx = window.document.getElementById('potencia-v')

var iTensaoTx = window.document.getElementById('tensao-i')
var iResistenciaTx = window.document.getElementById('resistencia-i')
var iPotenciaTx = window.document.getElementById('potencia-i')

var rCorrenteTx = window.document.getElementById('corrente-r')
var rTensaoTx = window.document.getElementById('tensao-r')
var rPotenciaTx = window.document.getElementById('potencia-r')

var wTensaoTx = window.document.getElementById('tensao-w')
var wCorrenteTx = window.document.getElementById('corrente-w')
var wResistenciaTx = window.document.getElementById('resistencia-w')

var vRes = window.document.getElementById('res-v')
var iRes = window.document.getElementById('res-i')
var wRes = window.document.getElementById('res-w')
var rRes = window.document.getElementById('res-r')


var calcular = window.document.querySelector('input#calcular')

calcular.addEventListener('mouseenter' , entrou)
calcular.addEventListener('mouseout' , saiu)


function entrou(){
    calcular.style.background = '#F5E102'
    calcular.style.color = '#0C1E34'
    calcular.style.fontWeight = 'bold'
}

function saiu(){
    calcular.style.background = '#033C59'
    calcular.style.color = 'white'
}

function tensao(){
    let corrente = Number(vCorrenteTx.value)
    let resistencia = Number(vResistenciaTx.value)
    let potencia = Number(vPotenciaTx.value)

    if (corrente != '' && potencia != '' && resistencia != ''){
        window.alert('Insira apenas duas grandezas')
    }else{
        if (corrente != '' && resistencia != ''){
            vRes.innerHTML = `Tensão = ${corrente*resistencia}V `
        
            }else if (potencia != '' && corrente != ''){
                vRes.innerHTML = `Tensão = ${potencia/corrente}V `
            }else{
                vRes.innerHTML = `Tensão = ${potencia**0.5*resistencia**0.5}V `
            }
    }
}

function corrente(){
    let tensao = Number(iTensaoTx.value)
    let resistencia = Number(iResistenciaTx.value)
    let potencia = Number(iPotenciaTx.value)

    if ( tensao != '' && resistencia != '' && potencia != ''){
        window.alert('Você inseriu três grandezas! Insira apenas duas')
    }else if (tensao == '' && potencia == '' && resistencia == ''){
        window.alert('Você não inseriu nenhuma grandeza')
    }else if (tensao == '' && resistencia == '' || tensao == '' && potencia == '' || potencia == '' && resistencia == ''){
        window.alert('Você inseriu apenas uma grandeza')
    }else{
        if (tensao != '' && resistencia != ''){
            iRes.innerHTML = `Corrente = ${tensao/resistencia} A`
        }else if (tensao != '' && potencia != ''){
            iRes.innerHTML = `Corrente = ${potencia/tensao} A`
        }else if( potencia != '' && resistencia != ''){
            iRes.innerHTML = `Corrente = ${potencia**0.5/resistencia**0.5} A`
        }
    }


}

