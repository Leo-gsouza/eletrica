function visivel(gerador, ...elements){
    if (gerador.style.display == 'block'){
        gerador.style.display = 'none'

    }else{gerador.style.display = 'block'
        elements.forEach(function(element){
            element.style.display = 'none'
        })
    }
}   
