function visivel(sistema, ...elements){
    if (sistema.style.display == 'block'){
        sistema.style.display = 'none'

    }else{sistema.style.display = 'block'
        elements.forEach(function(element){
            element.style.display = 'none'
        })
    }
}