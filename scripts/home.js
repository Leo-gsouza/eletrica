var somGrandezas = document.getElementById('aud1')
var somResistividade = document.getElementById('aud2')
var somGeradores = document.getElementById('aud3')


function clicar(button, audio){
    button.style.scale = '1.2'
    button.style.border = '4px solid #FFD35C'
    button.style.boxShadow = '0px 0px 15px white'
    audio.play()

}

somGrandezas.addEventListener('ended', function(){
    window.location.href = 'paginas/grandezas-eletricas.html'
})

somResistividade.addEventListener('ended', function(){
    window.location.href = 'paginas/resistividade.html'
})

somGeradores.addEventListener('ended', function(){
    window.location.href = 'paginas/geradores.html'
})
        