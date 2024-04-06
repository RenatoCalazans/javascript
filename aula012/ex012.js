var agora =new Date()
var horas = agora.getHours()
console.log(`agora sao exatamente ${horas} horas`)
if(horas < 12){
    console.log('dia')
}else if(horas <=19){
    console.log('tarde')
}else if(horas <= 24){
    console.log('noite')
}
