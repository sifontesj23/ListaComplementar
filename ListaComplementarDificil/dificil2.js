
/*2. Contagem regressiva
Crie uma função chamada contagemRegressiva que recebe um número como parâmetro e
exibe uma contagem regressiva a partir desse número até 0, usando um laço while.*/

function contagemRegressiva(n){
    console.log("Inicia contagem regressivo de:" + n)
    while(n>=0){
        console.log(n)  
        n--                  //decremente

    } 
    console.log("Fim")

}
console.log(contagemRegressiva(7))
