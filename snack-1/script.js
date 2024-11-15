const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

console.log(names);

// o
let namesList = ``;

names.forEach((name, i) => {
    namesList += `'${name}'`;
    if(i < names.length - 1){
        namesList += ', ';
    }

});
console.log(namesList);

//or

const namesList2 = names.map(name =>  `'${name}'`);
console.log(namesList2.join(', '));
