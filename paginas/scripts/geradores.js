function visivel(gerador, fechados, botao, desativados){
    if (gerador.style.display == 'block'){
        gerador.style.display = 'none'

    }else{gerador.style.display = 'block'
        fechados.forEach(function(fechado){
            fechado.style.display = 'none'
        })

        desativados.forEach(function(desativado){
            desativado.style.color = '#033C59'
            desativado.style.background = 'lightgoldenrodyellow'
            desativado.style.scale = '1'
        })

        botao.style.color = 'white'
        botao.style.background = '#01537B'
        botao.style.scale = '1.05'
    }
}   
