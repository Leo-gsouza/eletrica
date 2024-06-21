

function visivel(gerador, f1, f2, f3, f4, f5, f6){
    if (gerador.style.display == 'block'){
        gerador.style.display = 'none'

    }else{gerador.style.display = 'block'
        f1.style.display = 'none'
        f2.style.display = 'none'
        f3.style.display = 'none'
        f4.style.display = 'none'
        f5.style.display = 'none' 
        f6.style.display = 'none' 
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