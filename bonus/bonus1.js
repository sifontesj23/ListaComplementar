/*Exercícios Bônus (2 exercícios)

1. Soma dos múltiplos de 3 e 5 até 100
Crie uma função chamada somarMultiplos que percorre os números de 1 a 100 e retorna a
soma de todos os números que são múltiplos de 3 ou 5.
*/

function somarMultiplos(){
    console.log("Soma dos numero de 1 ate 100 somando multiplos de 3 e 5")
    i=1
    soma=0
    for(i;i<=100;i++){
        if(i%3==0 || i%5==0)
            soma=soma+i
    }
    return soma
    

}
console.log(somarMultiplos()) 
