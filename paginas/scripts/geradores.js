function visivel(gerador, f2){
    if (gerador.style.display == 'block'){
        gerador.style.display = 'none'

    }else{gerador.style.display = 'block'
        f2.style.display = 'none'
        gerador.style.boxShadow = '0px 0px 15px white'
    }

}