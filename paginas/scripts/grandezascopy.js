

function tensao(w, a, o, resultado, calc){
    let corrente = Number(a.value)
    let resistencia = Number(o.value)
    let potencia = Number(w.value)
    let res = resultado
    let botao = calc

    botao.style.background = '#F7EE79'
    botao.style.color = 'black'
    botao.style.boxShadow = '1px 1px 3px #64656B'
    botao.style.fontWeight = 'bold'

    if (corrente != '' && potencia != '' && resistencia != ''){
        window.alert('Insira apenas duas grandezas')
    }else{
        if (corrente != '' && resistencia != ''){
            res.innerHTML = `Tensão = ${(corrente*resistencia).toFixed(0)}V `
        
            }else if (potencia != '' && corrente != ''){
                res.innerHTML = `Tensão = ${(potencia/corrente).toFixed(0)}V `
            }else{
                res.innerHTML = `Tensão = ${(potencia**0.5*resistencia**0.5).toFixed(0)}V `
            }
    }
}

function corrente(w , v, o, resultado, calc){
    let tensao = Number(v.value)
    let resistencia = Number(o.value)
    let potencia = Number(w.value)
    let res = resultado
    let botao = calc

    botao.style.background = '#F7EE79'
    botao.style.color = 'black'
    botao.style.boxShadow = '1px 1px 3px #64656B'
    botao.style.fontWeight = 'bold'

    if ( tensao != '' && resistencia != '' && potencia != ''){
        window.alert('Você inseriu três grandezas! Insira apenas duas')
    }else if (tensao == '' && potencia == '' && resistencia == ''){
        window.alert('Você não inseriu nenhuma grandeza')
    }else if (tensao == '' && resistencia == '' || tensao == '' && potencia == '' || potencia == '' && resistencia == ''){
        window.alert('Você inseriu apenas uma grandeza')
    }else{
        if (tensao != '' && resistencia != ''){
            res.innerHTML = `Corrente = ${(tensao/resistencia.toFixed(0))} A`
        }else if (tensao != '' && potencia != ''){
            res.innerHTML = `Corrente = ${(potencia/tensao.toFixed(0))} A`
        }else if( potencia != '' && resistencia != ''){
            res.innerHTML = `Corrente = ${(potencia**0.5/resistencia**0.5.toFixed(0))} A`
        }
    }

} 

function resistencia(w, v, a, resultado, calc){
    let potencia = Number(w.value)
    let tensao = Number(v.value)
    let corrente = Number(a.value)
    let res = resultado
    let botao = calc

    botao.style.background = '#F7EE79'
    botao.style.color = 'black'
    botao.style.boxShadow = '1px 1px 3px #64656B'
    botao.style.fontWeight = 'bold'
    

    if (tensao != '' && corrente != '' && potencia != ''){
        window.alert('Você inseriu três grandezas, insira apenas duas')
    }else if (tensao <= 0 && corrente <= 0 && potencia <= 0){
        window.alert('Você não inseriu nenhuma grandeza')
    }else if (tensao > 0 && corrente <= 0 && potencia <= 0){
        alert('Você inseriu apenas o valor da tensão')
    }else if (tensao <= 0 && corrente > 0 && potencia <= 0){
        alert('Você inseriu apenas o valor da corrente')
    }else if (tensao <= 0 && corrente <= 0 && potencia > 0){
        alert('Você iseriu apenas o valor da potencia')

    }else if (tensao > 0 && corrente > 0){
        res.innerHTML = `Resistencia = ${(tensao/corrente).toFixed(0)} Ω `
    }else if( tensao > 0 && potencia > 0 ){
        res.innerHTML = `Resistencia = ${(tensao**2/potencia).toFixed(0)} Ω`
    }else if (corrente > 0 && potencia > 0){
        res.innerHTML = `Resistencia = ${(potencia/corrente**2).toFixed(0)} Ω`
    }


}

