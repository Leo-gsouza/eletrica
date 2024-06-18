
function capacidade(mat, sec, met, iso, res, imagem){
    let seccao = Number(sec.value)
    let material = String(mat.value)
    let metodo = String(met.value).toLocaleUpperCase()
    let isolamento = String(iso.value)
    let capacidade2 = ''
    let capacidade3 = ''
    let resultado = res
    var img = imagem

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
        img.src = "../imagens/metodob2.jpg"
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
        
    }else if (material == 'cobre' && metodo == 'C' && isolamento =='pvc'){
        img.src = "../imagens/metodoc.jpg"
        if (seccao == '0.5'){
            capacidade2 = '10 amperes'
            capacidade3 = '9 amperes'

        }else if ( seccao == '0.75'){
            capacidade2 = '13 amperes'
            capacidade3 = '11 amperes'

        }else if( seccao == '1'){
            capacidade2 = '15 amperes'
            capacidade3 = '14 amperes'

        }else if ( seccao == '1.5'){
            capacidade2 = '19.5 amperes'
            capacidade3 = '17.5 amperes'

        }else if( seccao == '2.5'){
            capacidade2 = '27 amperes'
            capacidade3 = '24 amperes'

        }else if ( seccao == '4'){
            capacidade2 = '36 amperes'
            capacidade3 = '32 amperes'

        }else if( seccao == '6'){
            capacidade2 = '46 amperes'
            capacidade3 = '41 amperes'

        }else if ( seccao == '10'){
            capacidade2 = '63 amperes'
            capacidade3 = '57 amperes'

        }else if( seccao == '16'){
            capacidade2 = '85 amperes'
            capacidade3 = '76 amperes'

        }else if ( seccao == '25'){
            capacidade2 = '112 amperes'
            capacidade3 = '96 amperes'

        }else if( seccao == '35'){
            capacidade2 = '138 amperes'
            capacidade3 = '119 amperes'

        }else if ( seccao == '50'){
            capacidade2 = '168 amperes'
            capacidade3 = '144 amperes'

        }else if( seccao == '70'){
            capacidade2 = '213 amperes'
            capacidade3 = '184 amperes'}

/* ISOLAMENTO EPR */
    }else if (material == 'cobre' && metodo == 'A1' && isolamento == 'epr'){
        img.src = "../imagens/a1.JPG"
        if (seccao == '0.5'){
            capacidade2 = '10 amperes'
            capacidade3 = '9 amperes'

        }else if ( seccao == '0.75'){
            capacidade2 = '12 amperes'
            capacidade3 = '11 amperes'

        }else if( seccao == '1'){
            capacidade2 = '15 amperes'
            capacidade3 = '13 amperes'

        }else if ( seccao == '1.5'){
            capacidade2 = '19 amperes'
            capacidade3 = '17 amperes'

        }else if( seccao == '2.5'){
            capacidade2 = '26 amperes'
            capacidade3 = '23 amperes'

        }else if ( seccao == '4'){
            capacidade2 = '35 amperes'
            capacidade3 = '31 amperes'

        }else if( seccao == '6'){
            capacidade2 = '45 amperes'
            capacidade3 = '40 amperes'

        }else if ( seccao == '10'){
            capacidade2 = '61 amperes'
            capacidade3 = '54 amperes'

        }else if( seccao == '16'){
            capacidade2 = '81 amperes'
            capacidade3 = '73 amperes'

        }else if ( seccao == '25'){
            capacidade2 = '106 amperes'
            capacidade3 = '95 amperes'

        }else if( seccao == '35'){
            capacidade2 = '131 amperes'
            capacidade3 = '117 amperes'

        }else if ( seccao == '50'){
            capacidade2 = '158 amperes'
            capacidade3 = '141 amperes'

        }else if( seccao == '70'){
            capacidade2 = '200 amperes'
            capacidade3 = '179 amperes'}

    }else if (material == 'cobre' && metodo == 'A2' && isolamento == 'epr'){
        img.src = "../imagens/a2.JPG"
        if (seccao == '0.5'){
            capacidade2 = '10 amperes'
            capacidade3 = '9 amperes'

        }else if ( seccao == '0.75'){
            capacidade2 = '12 amperes'
            capacidade3 = '11 amperes'

        }else if( seccao == '1'){
            capacidade2 = '14 amperes'
            capacidade3 = '13 amperes'

        }else if ( seccao == '1.5'){
            capacidade2 = '18.5 amperes'
            capacidade3 = '16.5 amperes'

        }else if( seccao == '2.5'){
            capacidade2 = '25 amperes'
            capacidade3 = '22 amperes'

        }else if ( seccao == '4'){
            capacidade2 = '33 amperes'
            capacidade3 = '30 amperes'

        }else if( seccao == '6'){
            capacidade2 = '42 amperes'
            capacidade3 = '38 amperes'

        }else if ( seccao == '10'){
            capacidade2 = '57 amperes'
            capacidade3 = '51 amperes'

        }else if( seccao == '16'){
            capacidade2 = '76 amperes'
            capacidade3 = '68 amperes'

        }else if ( seccao == '25'){
            capacidade2 = '99 amperes'
            capacidade3 = '89 amperes'

        }else if( seccao == '35'){
            capacidade2 = '121 amperes'
            capacidade3 = '109 amperes'

        }else if ( seccao == '50'){
            capacidade2 = '145 amperes'
            capacidade3 = '130 amperes'

        }else if( seccao == '70'){
            capacidade2 = '183 amperes'
            capacidade3 = '164 amperes'}

    }else if (material == 'cobre' && metodo == 'B1' && isolamento == 'epr'){
        img.src = "../imagens/b1.JPG"
        if (seccao == '0.5'){
            capacidade2 = '12 amperes'
            capacidade3 = '10 amperes'

        }else if ( seccao == '0.75'){
            capacidade2 = '15 amperes'
            capacidade3 = '13 amperes'

        }else if( seccao == '1'){
            capacidade2 = '18 amperes'
            capacidade3 = '16 amperes'

        }else if ( seccao == '1.5'){
            capacidade2 = '23 amperes'
            capacidade3 = '20 amperes'

        }else if( seccao == '2.5'){
            capacidade2 = '31 amperes'
            capacidade3 = '28 amperes'

        }else if ( seccao == '4'){
            capacidade2 = '42 amperes'
            capacidade3 = '37 amperes'

        }else if( seccao == '6'){
            capacidade2 = '54 amperes'
            capacidade3 = '48 amperes'

        }else if ( seccao == '10'){
            capacidade2 = '75 amperes'
            capacidade3 = '66 amperes'

        }else if( seccao == '16'){
            capacidade2 = '100 amperes'
            capacidade3 = '88 amperes'

        }else if ( seccao == '25'){
            capacidade2 = '133 amperes'
            capacidade3 = '117 amperes'

        }else if( seccao == '35'){
            capacidade2 = '164 amperes'
            capacidade3 = '144 amperes'

        }else if ( seccao == '50'){
            capacidade2 = '198 amperes'
            capacidade3 = '175 amperes'

        }else if( seccao == '70'){
            capacidade2 = '253 amperes'
            capacidade3 = '222 amperes'}

    }else if (material == 'cobre' && metodo == 'B2' && isolamento =='epr'){
        img.src = "../imagens/metodob2.jpg"
        if (seccao == '0.5'){
            capacidade2 = '11 amperes'
            capacidade3 = '10 amperes'

        }else if ( seccao == '0.75'){
            capacidade2 = '15 amperes'
            capacidade3 = '13 amperes'

        }else if( seccao == '1'){
            capacidade2 = '17 amperes'
            capacidade3 = '15 amperes'

        }else if ( seccao == '1.5'){
            capacidade2 = '22 amperes'
            capacidade3 = '19.5 amperes'

        }else if( seccao == '2.5'){
            capacidade2 = '30 amperes'
            capacidade3 = '26 amperes'

        }else if ( seccao == '4'){
            capacidade2 = '40 amperes'
            capacidade3 = '35 amperes'

        }else if( seccao == '6'){
            capacidade2 = '51 amperes'
            capacidade3 = '44 amperes'

        }else if ( seccao == '10'){
            capacidade2 = '69 amperes'
            capacidade3 = '60 amperes'

        }else if( seccao == '16'){
            capacidade2 = '91 amperes'
            capacidade3 = '80 amperes'

        }else if ( seccao == '25'){
            capacidade2 = '119 amperes'
            capacidade3 = '105 amperes'

        }else if( seccao == '35'){
            capacidade2 = '146 amperes'
            capacidade3 = '128 amperes'

        }else if ( seccao == '50'){
            capacidade2 = '175 amperes'
            capacidade3 = '154 amperes'

        }else if( seccao == '70'){
            capacidade2 = '221 amperes'
            capacidade3 = '194 amperes'}
        
    }else if (material == 'cobre' && metodo == 'C' && isolamento =='epr'){
        img.src = "../imagens/metodoc.jpg"
        if (seccao == '0.5'){
            capacidade2 = '10 amperes'
            capacidade3 = '9 amperes'

        }else if ( seccao == '0.75'){
            capacidade2 = '13 amperes'
            capacidade3 = '11 amperes'

        }else if( seccao == '1'){
            capacidade2 = '15 amperes'
            capacidade3 = '14 amperes'

        }else if ( seccao == '1.5'){
            capacidade2 = '19.5 amperes'
            capacidade3 = '17.5 amperes'

        }else if( seccao == '2.5'){
            capacidade2 = '27 amperes'
            capacidade3 = '24 amperes'

        }else if ( seccao == '4'){
            capacidade2 = '36 amperes'
            capacidade3 = '32 amperes'

        }else if( seccao == '6'){
            capacidade2 = '46 amperes'
            capacidade3 = '41 amperes'

        }else if ( seccao == '10'){
            capacidade2 = '63 amperes'
            capacidade3 = '57 amperes'

        }else if( seccao == '16'){
            capacidade2 = '85 amperes'
            capacidade3 = '76 amperes'

        }else if ( seccao == '25'){
            capacidade2 = '112 amperes'
            capacidade3 = '96 amperes'

        }else if( seccao == '35'){
            capacidade2 = '138 amperes'
            capacidade3 = '119 amperes'

        }else if ( seccao == '50'){
            capacidade2 = '168 amperes'
            capacidade3 = '144 amperes'

        }else if( seccao == '70'){
            capacidade2 = '213 amperes'
            capacidade3 = '184 amperes'}

    }else if (material == 'aluminio' && metodo == 'A1' && isolamento =='pvc'){
        img.src = "../imagens/a1.JPG"
        if( seccao == '16'){
            capacidade2 = '48 amperes'
            capacidade3 = '43 amperes'

        }else if ( seccao == '25'){
            capacidade2 = '63 amperes'
            capacidade3 = '57 amperes'

        }else if( seccao == '35'){
            capacidade2 = '77 amperes'
            capacidade3 = '70 amperes'

        }else if ( seccao == '50'){
            capacidade2 = '93 amperes'
            capacidade3 = '84 amperes'

        }else if( seccao == '70'){
            capacidade2 = '118 amperes'
            capacidade3 = '107 amperes'}

    }else if (material == 'aluminio' && metodo == 'A2' && isolamento =='pvc'){
        img.src = "../imagens/a2.JPG"
        if( seccao == '16'){
            capacidade2 = '44 amperes'
            capacidade3 = '41 amperes'

        }else if ( seccao == '25'){
            capacidade2 = '58 amperes'
            capacidade3 = '53 amperes'

        }else if( seccao == '35'){
            capacidade2 = '71 amperes'
            capacidade3 = '65 amperes'

        }else if ( seccao == '50'){
            capacidade2 = '86 amperes'
            capacidade3 = '78 amperes'

        }else if( seccao == '70'){
            capacidade2 = '108 amperes'
            capacidade3 = '98 amperes'}

    }else if (material == 'aluminio' && metodo == 'B1' && isolamento =='pvc'){
        img.src = "../imagens/b1.JPG"
        if( seccao == '16'){
            capacidade2 = '60 amperes'
            capacidade3 = '53 amperes'

        }else if ( seccao == '25'){
            capacidade2 = '79 amperes'
            capacidade3 = '70 amperes'

        }else if( seccao == '35'){
            capacidade2 = '97 amperes'
            capacidade3 = '86 amperes'

        }else if ( seccao == '50'){
            capacidade2 = '118 amperes'
            capacidade3 = '104 amperes'

        }else if( seccao == '70'){
            capacidade2 = '150 amperes'
            capacidade3 = '133 amperes'}

    }else if (material == 'aluminio' && metodo == 'B2' && isolamento =='pvc'){
        img.src = "../imagens/metodob2.jpg"
        if( seccao == '16'){
            capacidade2 = '54 amperes'
            capacidade3 = '48 amperes'

        }else if ( seccao == '25'){
            capacidade2 = '71 amperes'
            capacidade3 = '62 amperes'

        }else if( seccao == '35'){
            capacidade2 = '86 amperes'
            capacidade3 = '77 amperes'

        }else if ( seccao == '50'){
            capacidade2 = '104 amperes'
            capacidade3 = '92 amperes'

        }else if( seccao == '70'){
            capacidade2 = '131 amperes'
            capacidade3 = '116 amperes'}

    }else if (material == 'aluminio' && metodo == 'C' && isolamento =='pvc'){
        img.src = "../imagens/metodoc.jpg"
        if( seccao == '16'){
            capacidade2 = '66 amperes'
            capacidade3 = '59 amperes'

        }else if ( seccao == '25'){
            capacidade2 = '83 amperes'
            capacidade3 = '73 amperes'

        }else if( seccao == '35'){
            capacidade2 = '103 amperes'
            capacidade3 = '90 amperes'

        }else if ( seccao == '50'){
            capacidade2 = '125 amperes'
            capacidade3 = '110 amperes'

        }else if( seccao == '70'){
            capacidade2 = '160 amperes'
            capacidade3 = '140 amperes'}

    }else if (material == 'aluminio' && metodo == 'A1' && isolamento =='epr'){
        img.src = "../imagens/a1.JPG"
        if( seccao == '16'){
            capacidade2 = '64 amperes'
            capacidade3 = '58 amperes'

        }else if ( seccao == '25'){
            capacidade2 = '84 amperes'
            capacidade3 = '76 amperes'

        }else if( seccao == '35'){
            capacidade2 = '103 amperes'
            capacidade3 = '94 amperes'

        }else if ( seccao == '50'){
            capacidade2 = '125 amperes'
            capacidade3 = '113 amperes'

        }else if( seccao == '70'){
            capacidade2 = '158 amperes'
            capacidade3 = '142 amperes'}

    }else if (material == 'aluminio' && metodo == 'A2' && isolamento =='epr'){
        img.src = "../imagens/a2.JPG"
        if( seccao == '16'){
            capacidade2 = '60 amperes'
            capacidade3 = '55 amperes'

        }else if ( seccao == '25'){
            capacidade2 = '78 amperes'
            capacidade3 = '71 amperes'

        }else if( seccao == '35'){
            capacidade2 = '96 amperes'
            capacidade3 = '87 amperes'

        }else if ( seccao == '50'){
            capacidade2 = '115 amperes'
            capacidade3 = '104 amperes'

        }else if( seccao == '70'){
            capacidade2 = '145 amperes'
            capacidade3 = '131 amperes'}

    }else if (material == 'aluminio' && metodo == 'B1' && isolamento =='epr'){
        img.src = "../imagens/b1.JPG"
        if( seccao == '16'){
            capacidade2 = '79 amperes'
            capacidade3 = '71 amperes'

        }else if ( seccao == '25'){
            capacidade2 = '105 amperes'
            capacidade3 = '93 amperes'

        }else if( seccao == '35'){
            capacidade2 = '130 amperes'
            capacidade3 = '116 amperes'

        }else if ( seccao == '50'){
            capacidade2 = '157 amperes'
            capacidade3 = '140 amperes'

        }else if( seccao == '70'){
            capacidade2 = '200 amperes'
            capacidade3 = '179 amperes'}

    }else if (material == 'aluminio' && metodo == 'B2' && isolamento =='epr'){
        img.src = "../imagens/metodob2.jpg"
        if( seccao == '16'){
            capacidade2 = '72 amperes'
            capacidade3 = '64 amperes'

        }else if ( seccao == '25'){
            capacidade2 = '94 amperes'
            capacidade3 = '84 amperes'

        }else if( seccao == '35'){
            capacidade2 = '115 amperes'
            capacidade3 = '103 amperes'

        }else if ( seccao == '50'){
            capacidade2 = '138 amperes'
            capacidade3 = '124 amperes'

        }else if( seccao == '70'){
            capacidade2 = '175 amperes'
            capacidade3 = '156 amperes'}

    }else if (material == 'aluminio' && metodo == 'C' && isolamento =='epr'){
        img.src = "../imagens/metodoc.jpg"
        if( seccao == '16'){
            capacidade2 = '84 amperes'
            capacidade3 = '76 amperes'

        }else if ( seccao == '25'){
            capacidade2 = '101 amperes'
            capacidade3 = '90 amperes'

        }else if( seccao == '35'){
            capacidade2 = '126 amperes'
            capacidade3 = '112 amperes'

        }else if ( seccao == '50'){
            capacidade2 = '154 amperes'
            capacidade3 = '136 amperes'

        }else if( seccao == '70'){
            capacidade2 = '198 amperes'
            capacidade3 = '174 amperes'}
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