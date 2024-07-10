function visivel(ativo, desativados, sistema, ...elements){
    if (sistema.style.display == 'block'){
        sistema.style.display = 'none'
        

    }else{sistema.style.display = 'block'
        desativados.forEach(function(desativado){
            desativado.style.color = '#01537B'
            desativado.style.background = 'lightgoldenrodyellow'
        })
        ativo.style.color = 'white'
        ativo.style.background = '#01537B'

        elements.forEach(function(element){
            element.style.display = 'none'
        })
    }
}