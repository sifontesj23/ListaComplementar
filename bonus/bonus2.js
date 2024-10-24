/*2. Cálculo da média de números pares
Crie uma função chamada calcularMediaPares que percorre os números de 1 a 50 e calcula
a média de todos os números pares encontrados.*/

function calcularMediaPares(){
    i=1
    media=0
    somaNumPares=0
    cantidadeNumPares=0
    for(i;i<=50;i++){
        if(i%2==0){
            somaNumPares=somaNumPares+i
            cantidadeNumPares++
        }
    
    }
    media=somaNumPares/cantidadeNumPares
    return media
}
console.log(calcularMediaPares())