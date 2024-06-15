
function capacidade(mat, sec, met, iso, res, imagem){
    let seccao = Number(sec.value)
    let material = String(mat.value)
    let metodo = String(met.value).toLocaleUpperCase()
    let isolamento = String(iso.value)
    let capacidade2 = ''
    let capacidade3 = ''
    let resultado = res
    let img = imagem

    resultado.style.display = 'block'
    img.style.display = 'block'
    
    /* COBRE PVC  A1 */
    if (material == 'cobre' && metodo == 'A1' && isolamento =='pvc'){
        img.src = "../imagens/a1.JPG"
        if (seccao == '0.5'){
            capacidade2 = '7 amperes'
            capacidade3 = '7 amperes'

        }else if ( seccao == '0.75'){
            capacidade2 = '9 amperes'
            capacidade3 = '9 amperes'

        }else if( seccao == '1'){
            capacidade2 = '11 amperes'
            capacidade3 = '10 amperes'

        }else if ( seccao == '1.5'){
            capacidade2 = '14.5 amperes'
            capacidade3 = '13.5 amperes'

        }else if( seccao == '2.5'){
            capacidade2 = '19.5 amperes'
            capacidade3 = '18 amperes'

        }else if ( seccao == '4'){
            capacidade2 = '26 amperes'
            capacidade3 = '24 amperes'

        }else if( seccao == '6'){
            capacidade2 = '34 amperes'
            capacidade3 = '31 amperes'

        }else if ( seccao == '10'){
            capacidade2 = '46 amperes'
            capacidade3 = '42 amperes'

        }else if( seccao == '16'){
            capacidade2 = '61 amperes'
            capacidade3 = '56 amperes'

        }else if ( seccao == '25'){
            capacidade2 = '80 amperes'
            capacidade3 = '73 amperes'

        }else if( seccao == '35'){
            capacidade2 = '99 amperes'
            capacidade3 = '89 amperes'

        }else if ( seccao == '50'){
            capacidade2 = '119 amperes'
            capacidade3 = '108 amperes'

        }else if( seccao == '70'){
            capacidade2 = '151 amperes'
            capacidade3 = '136 amperes'}

    /* COBRE PVC  A2 */
    }else if (material == 'cobre' && metodo == 'A2' && isolamento =='pvc'){
        img.src = "../imagens/a2.JPG"
        if (seccao == '0.5'){
            capacidade2 = '7 amperes'
            capacidade3 = '7 amperes'

        }else if ( seccao == '0.75'){
            capacidade2 = '9 amperes'
            capacidade3 = '9 amperes'

        }else if( seccao == '1'){
            capacidade2 = '11 amperes'
            capacidade3 = '10 amperes'

        }else if ( seccao == '1.5'){
            capacidade2 = '14 amperes'
            capacidade3 = '13 amperes'

        }else if( seccao == '2.5'){
            capacidade2 = '18.5 amperes'
            capacidade3 = '17.5 amperes'

        }else if ( seccao == '4'){
            capacidade2 = '25 amperes'
            capacidade3 = '23 amperes'

        }else if( seccao == '6'){
            capacidade2 = '32 amperes'
            capacidade3 = '29 amperes'

        }else if ( seccao == '10'){
            capacidade2 = '43 amperes'
            capacidade3 = '39 amperes'

        }else if( seccao == '16'){
            capacidade2 = '57 amperes'
            capacidade3 = '52 amperes'

        }else if ( seccao == '25'){
            capacidade2 = '75 amperes'
            capacidade3 = '68 amperes'

        }else if( seccao == '35'){
            capacidade2 = '92 amperes'
            capacidade3 = '83 amperes'

        }else if ( seccao == '50'){
            capacidade2 = '110 amperes'
            capacidade3 = '99 amperes'

        }else if( seccao == '70'){
            capacidade2 = '139 amperes'
            capacidade3 = '125 amperes'}

    /* COBRE PVC B1 */
    }else if (material == 'cobre' && metodo == 'B1' && isolamento =='pvc'){
        img.src = "../imagens/b1.JPG"
        if (seccao == '0.5'){
            capacidade2 = '9 amperes'
            capacidade3 = '8 amperes'

        }else if ( seccao == '0.75'){
            capacidade2 = '11 amperes'
            capacidade3 = '10 amperes'

        }else if( seccao == '1'){
            capacidade2 = '14 amperes'
            capacidade3 = '12 amperes'

        }else if ( seccao == '1.5'){
            capacidade2 = '17.5 amperes'
            capacidade3 = '15.5 amperes'

        }else if( seccao == '2.5'){
            capacidade2 = '24 amperes'
            capacidade3 = '21 amperes'

        }else if ( seccao == '4'){
            capacidade2 = '32 amperes'
            capacidade3 = '28 amperes'

        }else if( seccao == '6'){
            capacidade2 = '41 amperes'
            capacidade3 = '36 amperes'

        }else if ( seccao == '10'){
            capacidade2 = '57 amperes'
            capacidade3 = '50 amperes'

        }else if( seccao == '16'){
            capacidade2 = '76 amperes'
            capacidade3 = '68 amperes'

        }else if ( seccao == '25'){
            capacidade2 = '101 amperes'
            capacidade3 = '89 amperes'

        }else if( seccao == '35'){
            capacidade2 = '125 amperes'
            capacidade3 = '110 amperes'

        }else if ( seccao == '50'){
            capacidade2 = '151 amperes'
            capacidade3 = '134 amperes'

        }else if( seccao == '70'){
            capacidade2 = '192 amperes'
            capacidade3 = '171 amperes'}

     /* COBRE PVC B1 */
    }else if (material == 'cobre' && metodo == 'B2' && isolamento =='pvc'){
        img.src = "../imagens/B2.JPG"
        if (seccao == '0.5'){
            capacidade2 = '9 amperes'
            capacidade3 = '8 amperes'

        }else if ( seccao == '0.75'){
            capacidade2 = '11 amperes'
            capacidade3 = '10 amperes'

        }else if( seccao == '1'){
            capacidade2 = '13 amperes'
            capacidade3 = '12 amperes'

        }else if ( seccao == '1.5'){
            capacidade2 = '16.5 amperes'
            capacidade3 = '15 amperes'

        }else if( seccao == '2.5'){
            capacidade2 = '23 amperes'
            capacidade3 = '20 amperes'

        }else if ( seccao == '4'){
            capacidade2 = '30 amperes'
            capacidade3 = '27 amperes'

        }else if( seccao == '6'){
            capacidade2 = '38 amperes'
            capacidade3 = '34 amperes'

        }else if ( seccao == '10'){
            capacidade2 = '52 amperes'
            capacidade3 = '46 amperes'

        }else if( seccao == '16'){
            capacidade2 = '69 amperes'
            capacidade3 = '62 amperes'

        }else if ( seccao == '25'){
            capacidade2 = '90 amperes'
            capacidade3 = '80 amperes'

        }else if( seccao == '35'){
            capacidade2 = '111 amperes'
            capacidade3 = '99 amperes'

        }else if ( seccao == '50'){
            capacidade2 = '133 amperes'
            capacidade3 = '118 amperes'

        }else if( seccao == '70'){
            capacidade2 = '168 amperes'
            capacidade3 = '149 amperes'}
        
    }
    
    


  /* ======================================RESULT amperesDO======================================= */  
    if (material == 'aluminio' && seccao < 16){
        img.style.display = 'none'
        resultado.innerHTML = `<div><strong>Não consta na tabela cabos de aluminio inferiores a 16mm<sup>2</sup></h2>
        </strong>`
    }else{
        resultado.innerHTML = `<div><h2>Condutor de ${material}</h2></div>
            <div><h2>Seção de ${seccao}<p>mm<sup>2</sup></p></h2></div> 
            <div><h2>Isolamento de ${isolamento}</h2></div>
            <div><h2>Metodo de referência ${metodo}</h2></div>
            <div><p>Capacidade de <strong>${capacidade2}</strong> com 2 condutores carregados</p></div>  
            <div><p>Capacidade de <strong>${capacidade3}</strong> com 3 condutores carregados</p></div>`
        resultado.appenChild(img)
    }

} 