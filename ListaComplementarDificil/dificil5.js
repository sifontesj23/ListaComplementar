/*5. Soma dos dígitos de um número
Crie uma função chamada somarDigitos que recebe um número e retorna a soma de seus
dígitos. Por exemplo, ao passar o número 123, a função deve retornar 6 (1 + 2 + 3). Use um
laço while para dividir o número e somar os dígitos.*/

function somarDigitos(Digitos){
    console.log("Soma de digitos do o numero:" + Digitos)
    soma=0
    while(Digitos>10){
    resto=Digitos%10
    //console.log(resto)
    Digitos=(Digitos/10 | 0)
    soma=soma+resto
    }
    console.log(Digitos)
    soma=soma+Digitos
    return soma
}
console.log(somarDigitos(12345))
