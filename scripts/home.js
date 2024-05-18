
var botao1 = window.document.getElementById('botao-1')
        botao1.addEventListener('mouseenter', b1_entrar)
        botao1.addEventListener('mouseout', b1_sair)

        function entrar(){
            menu.style.textShadow = '0px 0px 10px black'
            menu.style.color = '#FFD35C'
        }

        function sair(){
            menu.style.textShadow = 'none'
            menu.style.color = '#0C1E34'
        }

        function b1_entrar(){
            botao1.style.background = 'lightgoldenrodyellow'
            botao1.style.boxShadow = '0px 0px 30px white'
            botao1.style.border = '5px solid #FFD35D '

        }

        function b1_sair(){
            botao1.style.background = 'white'
            botao1.style.boxShadow ='none'
            botao1.style.border = '4px solid #FFD35C'
        }