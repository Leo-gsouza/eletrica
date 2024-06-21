function calcular(are, pes, apa, exp, res){
    let area = Number(are.value)
    let pessoa = Number(pes.value)
    let aparelho = Number(apa.value)
    let exposicao = Number(exp.value)
    let resultado = res
    let totalexp = ''

    let total = (area*600)+(pessoa*600)+(aparelho*500)

    if (exposicao == 1){
        totalexp = total+(total*0.1)

    }else{totalexp = total}

    resultado.innerHTML = `<div><h2>Recomendado um Ar Condicionado de <br> <strong>${totalexp} BTUs</strong></h2></div> <div><h2><strong>${(totalexp * 0.293071 / 1000).toFixed(2)} Kw/h</strong>, considerando 0.293071 Watts a cada 1BTU</h2></div>`

    totalexp = 0
}