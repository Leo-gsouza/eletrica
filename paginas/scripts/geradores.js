function visivel(gerador, f1, f2){
    if (gerador.style.display == 'block'){
        gerador.style.display = 'none'

    }else{gerador.style.display = 'block'
        f1.style.display = 'none'
        f2.style.display = 'none'
        gerador.style.boxShadow = '0px 0px 15px white'
    }

}