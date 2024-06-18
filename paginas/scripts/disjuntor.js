function disjuntor(nom, cur, pol, res, imagem){

    let nominal = Number(nom.value)
    let curva = String(cur.value)
    let polo = Number(pol.value)
    let resultado = res
    img = imagem

    img.style.display = 'block'

    if (nominal == '6' && curva == 'B' && polo == '1'){
        img.src = "../imagens/monopolar6b.jpg"
    }else if (nominal == '6' && curva == 'B' && polo == '2')
        img.src = "../imagens/bipolar6b.jpg"

    resultado.appenChild(img)
}