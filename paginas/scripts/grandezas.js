function visivel(grandeza, fechadas, botao, desativados ){
    
    if (grandeza.style.display == 'block'){
        grandeza.style.display = 'none'

    }else{grandeza.style.display = 'block' /* botao ativo */
        fechadas.forEach(function(fechada){
            fechada.style.display = 'none'
        })
       
        desativados.forEach(function(desativado){
            desativado.style.background = 'lightgoldenrodyellow'
            desativado.style.scale = '1'
            desativado.style.color = '#033C59'
        })

        botao.style.color = 'white'
        botao.style.background = '#01537B'
        botao.style.scale = '1.2'
    
    }
}


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

    if (corrente > 0 && potencia > 0 && resistencia > 0){
        window.alert('Insira apenas duas grandezas')
    }else if (corrente <= 0 && potencia <= 0 && resistencia <= 0){
        alert('Você inseriu três grandezas. Insira apenas duas ')
    }else if (corrente > 0 && resistencia > 0){
            res.innerHTML = `${(corrente*resistencia).toFixed(0)}V `
    }else if (potencia != '' && corrente != ''){
                res.innerHTML = `${(potencia/corrente).toFixed(0)}V `
    }else{
            res.innerHTML = `${(potencia**0.5*resistencia**0.5).toFixed(0)}V `
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

    if ( tensao > 0 && potencia > 0 && resistencia > 0){
        window.alert('Você inseriu três grandezas! Insira apenas duas')
    }else if (tensao <= 0 && potencia <= 0 && resistencia <= 0){
        window.alert('Você não inseriu nenhuma grandeza')
    }else if (tensao <= 0 && potencia <= 0 && resistencia > 0){
        window.alert('Você inseriu apenas a resistencia elétrica')
    }else if (tensao > 0 && potencia <= 0 && resistencia <= 0){
        window.alert('Você inseriu apenas a tensão elétrica')
    }else if (tensao <= 0 && potencia > 0 && resistencia <= 0){
        window.alert('Você inseriu apenas a potencia elétrica')
    }else{
        if (tensao > 0 && resistencia > 0){
            res.innerHTML = `${(tensao/resistencia).toFixed(0)}A`
        }else if (tensao > 0 && potencia > 0){
            res.innerHTML = `${(potencia/tensao).toFixed(0)}A`
        }else if( potencia > 0 && resistencia > 0){
            res.innerHTML = `${(potencia**0.5/resistencia**0.5).toFixed(0)}A`
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
        res.innerHTML = `${(tensao/corrente).toFixed(0)}Ω `
    }else if( tensao > 0 && potencia > 0 ){
        res.innerHTML = `${(tensao**2/potencia).toFixed(0)}Ω`
    }else if (corrente > 0 && potencia > 0){
        res.innerHTML = `${(potencia/corrente**2).toFixed(0)}Ω`
    }


}

function potencia(v, a, o, resultado, calc){
    let resistencia = Number(o.value)
    let tensao = Number(v.value)
    let corrente = Number(a.value)
    let res = resultado
    let botao = calc

    botao.style.background = '#F7EE79'
    botao.style.color = 'black'
    botao.style.boxShadow = '1px 1px 3px #64656B'
    botao.style.fontWeight = 'bold'
    

    if (tensao != '' && corrente != '' && resistencia != ''){
        window.alert('Você inseriu três grandezas, insira apenas duas')
    }else if (tensao <= 0 && corrente <= 0 && resistencia <= 0){
        window.alert('Você não inseriu nenhuma grandeza')
    }else if (tensao > 0 && corrente <= 0 && resistencia <= 0){
        alert('Você inseriu apenas o valor da tensão')
    }else if (tensao <= 0 && corrente > 0 && resistencia <= 0){
        alert('Você inseriu apenas o valor da corrente')
    }else if (tensao <= 0 && corrente <= 0 && resistencia > 0){
        alert('Você iseriu apenas o valor da resistencia')

    }else if (tensao > 0 && corrente > 0){
        res.innerHTML = `${(tensao*corrente).toFixed(0)}W `
    }else if( tensao > 0 && resistencia > 0 ){
        res.innerHTML = `${((tensao**2)/resistencia).toFixed(0)}W`
    }else if (corrente > 0 && resistencia > 0){
        res.innerHTML = `${(resistencia*(corrente**2)).toFixed(0)}W`
    }


}

