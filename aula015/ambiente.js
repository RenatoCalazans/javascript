var num = [3,7,8,5,9,6,4]
num.sort()
/* 
for(var pos = 0;pos < num.length;pos ++ ){
    console.log(`a posiçao ${pos} tem o valor ${num[pos]}`)
}
*/
for(var pos in num){
    console.log(pos)
}