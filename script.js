function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano') // elementos localizados do html
    var res = document.querySelector('div#res') // elementos localizados do html
    if (fano.value.length == 0 || fano.value >= ano) {  // esse teste verifica se a caixa de texto esta vazia ou se o ano é maior que o ano atual
        window.alert(`[ERRO] Verifique os dados e tente novamente!! `) // se o teste for execultado aparecerá esse mensagem de erro .
    } else {
        var fsex = window.document.getElementsByName('radsex') // é importante ressaltar que eu não especifiquei qual elemento eu quero localizar, há 2 name com o mesmo nome que é 'radsex' 
        var idade = ano - Number(fano.value)
        var genero = ''
       /* var img = window.document.createElement('img')         // neste coso eu não vou usar essa formula pq ela não centraliza a imagem, então eu decidi colocar a tag img com id='img' direto no html.
        img.setAttribute('id','img')
        //img.setAttribute('src', 'nome da imagem.pj ou jpg') */ //essa linha vai dentro das chaves da if {}, é uma pra cada teste com nome de fotos diferente,Exemplo: img.setAttribute('src', 'nome da imgem.jpg')
        var img = window.document.getElementById('img') // localizado o id 
        var foto = window.document.getElementById('foto')//esse foi o jeito que encontrei para poder farzer a imagem centralizada.

        if (fsex[0].checked) { //esse teste vai verificar se fsex for 0, no caso o primeiro item que é homem, ele irá execultar essa sequencia de codigos que estão com o tema homem
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-masculino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'adolecente-masculino.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem-masculino.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-masculino.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'bebe-feminino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'adolecente-feminino.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher-feminino.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-feminino.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} de ${idade} anos`
        //res.appendChild(img)
        foto.style.textAlign = 'center'
        foto.style.position =  'relative'
        foto.style.top= '-15px'
        foto.appendChild(img)
    }


}
