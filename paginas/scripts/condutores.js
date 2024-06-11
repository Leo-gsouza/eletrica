
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
    
    /* COBRE PVC A1 */
    if (material == 'cobre' && metodo == 'A1' && isolamento =='pvc'){
        img.src = "../imagens/a1.JPG"
        if (seccao == '0.5'){
            capacidade2 = '7A'
            capacidade3 = '7A'

        }else if ( seccao == '0.75'){
            capacidade2 = '9A'
            capacidade3 = '9A'

        }else if( seccao == '1'){
            capacidade2 = '11A'
            capacidade3 = '10A'

        }else if ( seccao == '1.5'){
            capacidade2 = '14.5A'
            capacidade3 = '13.5A'

        }else if( seccao == '2.5'){
            capacidade2 = '19.5A'
            capacidade3 = '18A'

        }else if ( seccao == '4'){
            capacidade2 = '26A'
            capacidade3 = '24A'

        }else if( seccao == '6'){
            capacidade2 = '34A'
            capacidade3 = '31A'

        }else if ( seccao == '10'){
            capacidade2 = '46A'
            capacidade3 = '42A'

        }else if( seccao == '16'){
            capacidade2 = '61A'
            capacidade3 = '56A'

        }else if ( seccao == '25'){
            capacidade2 = '80A'
            capacidade3 = '73A'

        }else if( seccao == '35'){
            capacidade2 = '99A'
            capacidade3 = '89A'

        }else if ( seccao == '50'){
            capacidade2 = '119A'
            capacidade3 = '108A'

        }else if( seccao == '70'){
            capacidade2 = '151A'
            capacidade3 = '136A'}


    }else if (material == 'cobre' && metodo == 'A2' && isolamento =='pvc'){
        img.src = "../imagens/a2.JPG"
        if (seccao == '0.5'){
            capacidade2 = '7A'
            capacidade3 = '7A'

        }else if ( seccao == '0.75'){
            capacidade2 = '9A'
            capacidade3 = '9A'

        }else if( seccao == '1'){
            capacidade2 = '11A'
            capacidade3 = '10A'

        }else if ( seccao == '1.5'){
            capacidade2 = '14A'
            capacidade3 = '13A'

        }else if( seccao == '2.5'){
            capacidade2 = '18.5A'
            capacidade3 = '17.5A'

        }else if ( seccao == '4'){
            capacidade2 = '25A'
            capacidade3 = '23A'

        }else if( seccao == '6'){
            capacidade2 = '32A'
            capacidade3 = '29A'

        }else if ( seccao == '10'){
            capacidade2 = '43A'
            capacidade3 = '39A'

        }else if( seccao == '16'){
            capacidade2 = '57A'
            capacidade3 = '52A'

        }else if ( seccao == '25'){
            capacidade2 = '75A'
            capacidade3 = '68A'

        }else if( seccao == '35'){
            capacidade2 = '92A'
            capacidade3 = '83A'

        }else if ( seccao == '50'){
            capacidade2 = '110A'
            capacidade3 = '99A'

        }else if( seccao == '70'){
            capacidade2 = '139A'
            capacidade3 = '125A'}
        
    }

        
    




    


  /* ======================================RESULTADO======================================= */  
    if (material == 'aluminio' && seccao < 16){
        resultado.innerHTML = 'Não consta na tabela cabos de aluminio inferiores a 16mm'
    }else{
        resultado.innerHTML = `<p>Um Condutor de <strong>${material}</strong> com a seção de <strong>${seccao}mm<sup>2</sup></strong> com o isolamento de <strong>${isolamento}</strong> no metodo de instalação <strong>${metodo}</strong> tem a capacidade de <strong>${capacidade2}</strong> com 2 condutores carregados e  <strong>${capacidade3}</strong> com 3 condutores carregados</p>`
        resultado.appenChild(img)
    }

} 