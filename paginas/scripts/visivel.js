function visivel(grandeza, fechar1, fechar2, fechar3, botao, b1, b2, b3){
    
    if (grandeza.style.display == 'block'){
        grandeza.style.display = 'none'
        /* Desativando efeitos no botao principal que foi desativado */
        botao.style.background = 'lightgoldenrodyellow'
        botao.style.scale = 'none'
        botao.style.color = 'black'
        botao.style.border = '1px solid #FFBA41'

    }else{grandeza.style.display = 'block' /* botao ativo */
        fechar1.style.display ='none'
        fechar2.style.display ='none'
        fechar3.style.display ='none'

        /* Ativando efeitos no botao ativo */
        botao.style.background = '#01537B'
        botao.style.scale = '1.2'
        botao.style.transformTranslateY = '5px'
        botao.style.color = 'white'
        botao.style.border = '3px solid #FFD35C'

        /* Desativando os efeitos nos outros botoes */
        b1.style.background = 'lightgoldenrodyellow'
        b1.style.scale = 'none'
        b1.style.color = 'black'
        b1.style.border = '1px solid #FFBA41'
        b2.style.background = 'lightgoldenrodyellow'
        b2.style.scale = 'none'
        b2.style.color = 'black'
        b3.style.border = '1px solid #FFBA41'
        b3.style.background = 'lightgoldenrodyellow'
        b3.style.scale = 'none'
        b3.style.color = 'black'
        b3.style.border = '1px solid #FFBA41'
        
       
    }
}

function menu(){
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    }else{itens.style.display = 'block'}
}