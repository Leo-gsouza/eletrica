function calcular(cin, cur, amp, res){
    let nominal = Number(cin.value)
    let curva = String(cur.value)
    let amper = Number(amp.value)
    let resultado = res
    let desarme = ''

    let icc = amper/nominal

    if (curva == 'b'){
        if( icc <=1 ){
            alert('O calculo da curva existe somente em casos que a corrente circulante seja superior a corrente nominal')
            desarme = 'Sem desarme!'

        }else if( icc > 1 && icc <= 1.2){
            desarme = '20 minutos aproximadamente'
        }else if( icc <= 1.3){
            desarme = '2 minutos aproximadamente'
        }else if( icc <= 1.4){
            desarme = '1 minuto aproximadamente'
        }else if( icc <= 1.5){
            desarme = '20 segundos aproximadamente'
        }else if( icc <= 1.75){
            desarme = '6 à 20 segundos aproximadamente'
        }else if( icc <= 2){
            desarme = '2 à 4 segundos aproximadamente'
        }else if( icc < 3){
            desarme = '1 segundo aproximadamente'
        }else if(icc > 3){
            desarme = 'Instantaneo! milisegundos'
        }

    }else if( curva == 'd'){
        if( icc <=1 ){
            alert('O calculo da curva existe somente em casos que a corrente circulante seja superior a corrente nominal')
            desarme = 'Sem desarme!'

        }else if( icc > 1 && icc <= 1.4){
            desarme = '20 à 60 minutos aproximadamente'
        }else if( icc <= 1.5){
            desarme = '12 à 20 minutos aproximadamente'
        }else if( icc <= 1.75){
            desarme = '8 à 12 minutos aproximadamente'
        }else if( icc <= 2){
            desarme = '6 à 8 minutos aproximadamente'
        }else if( icc < 3){
            desarme = '2 à 4 minutos aproximadamente'
        }else if(icc <= 4){
            desarme = '1 minuto aproximadamente'
        }else if(icc <= 4.5){
            desarme = '40 segundos aproximadamente!'
        }else if(icc <= 5){
            desarme = '30 segundos aproximandamente'
        }else if(icc <= 6){
            desarme = '6 à 10 segundos aproximandamente'
        }else if(icc <= 8){
            desarme = '20 segundos aproximandamente'
        }else if(icc <= 10){
            desarme = '2 segundos aproximandamente'
        }else if(icc >= 10){
            desarme = 'Instantaneo! milisegundos'
        }

    }else if( curva == 'c'){
        if( icc <=1 ){
            alert('O calculo da curva existe somente em casos que a corrente circulante seja superior a corrente nominal')
            desarme = 'Sem desarme!'

        }else if( icc > 1 && icc <= 1.4){
            desarme = '20 à 60 minutos aproximadamente'
        }else if( icc <= 1.5){
            desarme = '6 à 20 minutos aproximadamente'
        }else if( icc <= 1.75){
            desarme = '4 à 5 minutos aproximadamente'
        }else if( icc <= 2){
            desarme = '2 minutos aproximadamente'
        }else if( icc < 3){
            desarme = '30 a 40 segundos aproximadamente'
        }else if(icc <= 4){
            desarme = '15 à 25 segundos aproximadamente'
        }else if(icc <= 4.5){
            desarme = '8 segundos aproximadamente!'
        }else if(icc <= 5){
            desarme = '2 segundos aproximandamente'
        }else if(icc >= 5){
            desarme = 'Instantaneo! milisegundos'
        }
    }

    resultado.innerHTML = `<div><h2>A corrente circulante é <strong>${(icc.toFixed(1))} vezes</strong> superior a corrente nominal do disjuntor</h2> <h2>Tempo de desarme do disjuntor = <strong>${desarme}</strong></h2></div>`
    
}