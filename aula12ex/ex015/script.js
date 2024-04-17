function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano =document.getElementById('txtano')
    var res =document.getElementById('res')

    if(fano.value.length ==0 || fano.value > ano){
        window.alert('[erro] verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero ='homem'
            if(idade >= 0 && idade < 11){
                //criança
                img.setAttribute('src','criançaH.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','jovemH.png')
            }else if( idade < 50){
                //homem
                img.setAttribute('src','homem45.png')
            }else{
                //idoso
                img.setAttribute('src','idoso.png')
            }
        }else if(fsex[1].checked){
            genero='mulher'
            if(idade >= 0 && idade < 11){
                //criança
                img.setAttribute('src','criançaM.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','jovemM.png')
            }else if(idade < 50){
                //mulher
                img.setAttribute('src','mulher45.png')
            }else{
                //idosa
                img.setAttribute('src','idosa.png')
            }
        }
        res.style.textAlign ='center'
        res.innerHTML=`detectamos ${genero} com ${idade} anos `
        res.appendChild(img)
    }
}