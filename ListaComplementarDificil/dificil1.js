/*1. Soma de números de 1 a N
Crie uma função chamada somarAteN que recebe um número N como parâmetro e retorna
a soma de todos os números de 1 até N. Use um laço for.*/

function somarAteN(N){
    acum=0   //acumulador
    i=1
    for(i; i<=N; i++){
        acum=acum+i
    }
    return acum
}
console.log("A soma de 1 ate N " + somarAteN(4))
