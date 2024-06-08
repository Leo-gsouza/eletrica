
function saibaMais(botao, mais){
    if (mais.style.display == 'block'){
        mais.style.display = 'none'
        botao.style.background = 'lightgoldenrodyellow'
        
    }else{mais.style.display = 'block'
        botao.style.background = '#FFD35C'
    }

}

function buscar(sec, mat, resultado){
    let seccao = Number(sec.value)
    let material = String(mat.value)

    resultado.style.display = 'block'
    if (material == 'cobre'){
        if (seccao == '0.5'){
            resultado.innerHTML = `<h1>Condutor de cobre</h1><br> <h2>Secção = ${seccao}mm<sup>2</sup></h2> <br> <p>Capacidade de corrente de 9A com 2 condutores carregados</p> <p>Capacidade de corrente de 8A com 3 condutores carregados</p> `

        }else if(seccao == '0.75'){
            resultado.innerHTML = `<h1>Condutor de cobre</h1><br> <h2>Secção = ${seccao}mm<sup>2</sup></h2> <br> <p>Capacidade de corrente de 11A com 2 condutores carregados</p> <p>Capacidade de corrente de 10A com 3 condutores carregados</p> `
        }

   }else{resultado.innerHTML = `${seccao} ${material}`}
} 