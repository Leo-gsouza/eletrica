
window.addEventListener('pageshow', function(event){
    if (event.persisted){
        window.location.reload()
    }
})

function clicar(botao, audio){
    var botaoId = botao.id
    var efeito = audio

    botao.style.border = '6px solid #FFD35C'
    botao.style.boxShadow = '0px 0px 25px white'
    efeito.play()


    if(botaoId == 'um'){
        efeito.onended = function(){
            window.location.href = 'paginas/grandezas.html'
        }
    }else if(botaoId == 'dois'){
        efeito.onended = function(){
            window.location.href = 'paginas/resistividade.html'
        }
    }else if(botaoId == 'tres'){
        efeito.onended = function(){
            window.location.href = 'paginas/geradores.html'
        }
    }else if(botaoId == 'quatro'){
        efeito.onended = function(){
            window.location.href = 'paginas/capacidade.html'
        }
    }else if(botaoId == 'cinco'){
        efeito.onended = function(){
            window.location.href = 'paginas/queda.html'
        }
    }else if(botaoId == 'seis'){
        efeito.onended = function(){
            window.location.href = 'paginas/disjuntor.html'
        }
    }else if(botaoId == 'sete'){
        efeito.onended = function(){
            window.location.href = 'paginas/ar.html'
        }
    }else if (botaoId == 'oito'){
        efeito.onended = function(){
            window.location.href = 'paginas/aterramento.html'
        }
    }
}