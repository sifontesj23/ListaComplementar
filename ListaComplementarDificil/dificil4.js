/*4. Multiplicação de todos os números de 1 a N
Crie uma função chamada multiplicarAteN que recebe um número N como parâmetro e
retorna a multiplicação de todos os números de 1 até N. Use um laço for.*/

function multiplicarAteN(Num){
    console.log("Multiplicar numerode 1 ate N")
    i=1
    mult=1
    
    for (i;i<=Num;i++){
        mult=mult*i
    }
    console.log(mult)
}

multiplicarAteN(4)
