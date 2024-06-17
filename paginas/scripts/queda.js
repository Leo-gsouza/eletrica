function queda(com, sec, ten, pot, res){
    let comprimento = Number(com.value)
    let secao = Number(sec.value*10**-6).toFixed(10)
    let tensao = Number(ten.value)
    let potencia = Number(pot.value)
    let cobre = (1.7 * 10 ** -8).toFixed(10)

    let equipamentoR = tensao**2/potencia
    let condutorR = (cobre*comprimento/secao)
    let resistenciaUnid = tensao/(equipamentoR + condutorR)
    let resultado = res


    if (comprimento != '' && potencia != ''){
        resultado.innerHTML = `<h2>Condutor (R) = ${(condutorR).toFixed(2)}Ω</h2> <h2>Equipamento (R) = ${(equipamentoR).toFixed(2)}Ω</h2>
        <div>
            <p>A queda de tensão sobre o condutor é de <strong>${(resistenciaUnid * condutorR).toFixed(0)}V</strong> <br>A queda de tensão sobre o equipamento é de <strong>${(equipamentoR * resistenciaUnid).toFixed(0)}V</strong></p>
        </div>` 
    }else{
        alert('Preencha todos os dados')
    }
    
    
}