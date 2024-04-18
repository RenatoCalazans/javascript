function contar(){
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        window.alert('[erro]falta dados!')
        res.innerHTML= 'impossivel contar'
    }else{
        res.innerHTML ='contando: '
        var i =Number(ini.value)
        var f =Number(fim.value)
        var p =Number(passo.value)
        if(p <=0){
            window.alert('passo invalido')
        }
        if(i < f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += `\u{1F64F} ${c} `
            }
        }else{
            for(c =i; c >=f; c-= p){
                res.innerHTML += `\u{1F64F} ${c}  `
            }
        }

     
    }
}