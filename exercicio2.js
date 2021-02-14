const inquirer = require('inquirer');
const sequenciaNumeros = require('./questions');

        let arrayNumeros = [];

        inquirer.prompt(sequenciaNumeros).then((sequencia)=>{
            const Primeironumero = sequencia.primeiroNumero;
            arrayNumeros.push(Primeironumero);

            const segundoNumero = sequencia.segundoNumero;
            arrayNumeros.push(segundoNumero);

            const terceiroNumero = sequencia.terceiroNumero;
            arrayNumeros.push(terceiroNumero);

            const quartoNumero = sequencia.quartoNumero;
            arrayNumeros.push(quartoNumero);

            var somatoria = arrayNumeros.reduce((pilha,numero)=>{return pilha+numero});
            var apenasImpares = arrayNumeros.filter((numero)=>{return numero%2 !==0});
            console.log(`A soma de todos os números é: ${somatoria}`);
            console.log(`Os números impares são: ${apenasImpares}`);
        });


    
    


   


