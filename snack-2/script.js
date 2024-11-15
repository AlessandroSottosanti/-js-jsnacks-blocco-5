const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

let namesList = ``;

people.forEach((persona) => {
  namesList += persona.name;
  if(i < people.length - 1){
     namesList += ', ';
}

});
console.log(namesList);

// or

const names = people.map(person =>  `'${person.name}'`);
console.log(names.join(', '));


//TODO FUNCTION (DONT REPEAT UR SAELF)
