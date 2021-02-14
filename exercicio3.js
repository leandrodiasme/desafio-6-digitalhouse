const inquirer = require('inquirer');
const dataNascimento = require('./nascimento');

function formatUSADate(date){
    const splittedDate = date.split('/');
    return `${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`;
}

inquirer.prompt(dataNascimento).then((data)=>{
    const dataNascimentoUsuario = data.nascimento;
    console.log(`A data de nascimento é: ${dataNascimentoUsuario}`);

    var date = new Date(formatUSADate(dataNascimentoUsuario));

    console.log(`Dia: ${date.getDate()+1}`);
    console.log(`Mês: ${date.getMonth()+1}`);
    console.log(`Ano: ${date.getFullYear()}`);

});