
function buscar(op, ar, com, res, bus){
    let material = String(op.value)
    let area = Number(ar.value * 10** -6).toFixed(10)
    let comprimento = Number(com.value)
    let resultado = res
    let botao = bus

    botao.style.background = '#FFD35C'
    botao.style.color = 'black'

    if(material == 'ouro'){
        resistividade = (2.4 * 10 ** -8).toFixed(10)

    }else if (material == 'aluminio'){
        resistividade = (2.8 * 10 ** -8).toFixed(10)
    }else if (material == 'cobre'){
        resistividade = (1.7 * 10 ** -8).toFixed(10)
    }

    resultado.innerHTML = `R = ${(resistividade * comprimento / area).toFixed(2)}Ω`
}

