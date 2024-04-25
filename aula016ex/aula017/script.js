var num = document.querySelector('input#fnum')
var lista =document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = []

function isnumero(n) {
    if(Number(n) >=1 && Number(n) <=100 ){
        return true
    }else{
        return false
    }
}
function inlista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}
function adicionar(){
    if(isnumero(num.value) && !inlista(num.value , valores)){
       valores.push(Number(num.value))
       var item = document.createElement('option')
       item.text= `valor ${num.value} adicionado`
       lista.appendChild(item)
       res.innerHTML =""
    }else{
        window.alert('valor invalido ou ja encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
       window.alert('adicione valores antes de finalizar')
    }else{
        var tot = valores.length
        var maior =valores[0]
        var menor =valores[0]
        var soma =0
        var media = 0
        for(var pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
            menor =valores[pos]
         }
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p> ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>o maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>o menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>somando todos os valores,temos ${soma}</p>`
    }
