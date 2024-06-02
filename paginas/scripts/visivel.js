function visivel(grandeza, fechar1, fechar2){
    if (grandeza.style.display == 'block'){
        grandeza.style.display = 'none'}
    else{grandeza.style.display = 'block'
        fechar1.style.display ='none'
        fechar2.style.display ='none'
       
    }
}

function menu(){
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    }else{itens.style.display = 'block'}
}