

function visivel(gerador, ...elements){
    if (gerador.style.display == 'block'){
        gerador.style.display = 'none'

    }else{gerador.style.display = 'block'
        elements.forEach(function(element){
            element.style.display = 'none'
        })
    }
}    
/* document.addEventListener('DOMContentLoaded', ...) garante que o script será executado apenas após o carregamento completo do DOM. */
document.addEventListener('DOMContentLoaded' , function(){

/* const buttons = document.querySelectorAll('.action-btn'); seleciona todos os elementos com a classe button */
    const botoes = document.querySelectorAll('.button')

/* function clicar(event) { ... } define a função que será chamada quando um botão for clicado. Ela usa event.target.getAttribute('data-id') para obter o data-id do botão clicado. */
    function clicar(event){
        const botaoId = event.target.getAttribute('id')
        botaoId.style.color = 'red'
    }

    botoes.forEach(botao => {
        botao.addEventListener('click', clicar)
    })
})