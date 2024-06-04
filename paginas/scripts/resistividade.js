
function buscar(opcao, resultado){
    res = resultado
    material = String(opcao.value)
    if(material == 'ouro'){
        res.innerHTML = 'ok'

    }else{res.innerHTML = 'não'}
}