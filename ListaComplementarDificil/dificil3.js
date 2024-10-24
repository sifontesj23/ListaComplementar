
/*3. Imprimir números pares entre 1 e 100
Crie uma função chamada imprimirPares` que imprime todos os números pares entre 1 e
100. Use um laço `for`.*/
function imprimirPares(ini,fim){
    
    for (ini;ini<fim;ini++){
        
        if (ini%2==0){
            console.log(ini + " ê par")
        }
    }
}

imprimirPares(1,100)
