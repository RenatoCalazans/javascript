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
       
    }else{
        window.alert('valor invalido ou ja encontrado na lista.')
    }
}