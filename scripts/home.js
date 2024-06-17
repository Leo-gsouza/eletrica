var somGrandezas = document.getElementById('aud1')
var somResistividade = document.getElementById('aud2')
var somGeradores = document.getElementById('aud3')
var somCircuitos = document.getElementById('aud4')
var somQueda = document.getElementById('aud5')



window.addEventListener('pageshow', function(event){
    if (event.persisted){
        window.location.reload()
    }
})

function clicar(button, audio){
    button.style.border = '6px solid #FFD35C'
    button.style.boxShadow = '0px 0px 25px white'
    audio.play()

}

somGrandezas.addEventListener('ended', function(){
    window.location.href = 'paginas/grandezas.html'
})

somResistividade.addEventListener('ended', function(){
    window.location.href = 'paginas/resistividade.html'
})

somGeradores.addEventListener('ended', function(){
    window.location.href = 'paginas/geradores.html'
})

somCircuitos.addEventListener('ended', function(){
    window.location.href = 'paginas/capacidade.html'
})

somQueda.addEventListener('ended', function(){
    window.location.href = 'paginas/queda.html'
})
        