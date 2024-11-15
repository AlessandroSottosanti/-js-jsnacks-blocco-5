const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

console.log(names);

// o
let namesList = ``;

names.forEach((name, i) => {
    if(i === names.length - 1){
        namesList += `'${names[i]}' `
    }
    else{
        namesList += `'${names[i]}', `;
    }

});
console.log(namesList);