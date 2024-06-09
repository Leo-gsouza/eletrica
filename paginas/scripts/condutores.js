
function saibaMais(botao, mais){
    if (mais.style.display == 'block'){
        mais.style.display = 'none'
        botao.style.background = 'lightgoldenrodyellow'
        botao.style.color = 'black'
        botao.style.boxShadow = 'none'
        
    }else{mais.style.display = 'block'
        botao.style.background = '#01537B'
        botao.style.color = 'white'
        botao.style.boxShadow = '0px 0px 10px #FFD35C'
    }

}

function buscar(sec, mat, resultado){
    let seccao = Number(sec.value)
    let material = String(mat.value)

    resultado.style.display = 'block'
    if (material == 'cobre'){
        if (seccao == '0.5'){
            resultado.innerHTML = `<h2>Condutor de cobre<br>Secção = ${seccao}mm<sup>2</sup></h2> <br> <p>Capacidade de corrente de 9A com 2 condutores carregados</p> <p>Capacidade de corrente de 8A com 3 condutores carregados</p> `

        }else if(seccao == '0.75'){
            resultado.innerHTML = `<h2>Condutor de cobre<br>Secção = ${seccao}mm<sup>2</sup></h2> <br> <p>Capacidade de corrente de 11A com 2 condutores carregados</p> <p>Capacidade de corrente de 10A com 3 condutores carregados</p> `
        }

   }else{resultado.innerHTML = `${seccao} ${material}`}
} 