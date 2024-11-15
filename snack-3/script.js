const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

const majNumbers = numbers.map((number) => {
    result = number + 1
    return result;
});
console.log(majNumbers);

// or

const newNumbers = [];

numbers.forEach((number) => newNumbers.push(number + 1));
console.log(newNumbers);
