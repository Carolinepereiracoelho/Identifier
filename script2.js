function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var born = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (born.value.length == 0 || Number(born.value) > ano) {
        window.alert('Você não digitou um número válido')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(born.value)
        var gender = ''

        var img = document.createElement('img')//colocar foto dinamicamente pelo js
        img.setAttribute('id', 'foto')// crie img com id foto, equivalente a manualmente no html. img id=foto.

        if (fsex[0].checked) {
            gender = 'um homem'
            if (idade >= 0 && idade < 10) {
                //Uma criança
                img.setAttribute('src', 'babyboy.jpg')

            } else if (idade < 21) {
                //Um jovem
                img.setAttribute('src', 'youngboy.jpg')

            } else if (idade > 21 && idade < 50) {
                //Um adulto
                img.setAttribute('src', 'adultman.jpg')
            }
            else {
                //Um idoso
                img.setAttribute('src', 'oldman.jpg')
            }

        } else if (fsex[1].checked) {
            gender = 'uma mulher'

        } if (idade >= 0 && idade < 10) {
            //Uma criança
            img.setAttribute('src', 'babygirl.jpg')

        } else if (idade < 21) {
            //Um jovem
            img.setAttribute('src', 'bellebelinha.jpg')

        } else if (idade > 21 && idade < 50) {
            //Um adulto
            img.setAttribute('src', 'adultwoman.jpg')
        }
        else {
            //Um idoso
            img.setAttribute('src', 'oldlady.jpg')
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gender} com ${idade} anos.`
        res.appendChild(img)


    }


}