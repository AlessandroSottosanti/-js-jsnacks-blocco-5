const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]


let evenNumbers = [];

const oddNums = nums.forEach((num) => {
    const oddsEven = num % 2 === 0;
    if (oddsEven){
        evenNumbers.push(num);
    }
  });
  
  console.log (evenNumbers);

  // or

const evenNums = nums.filter((num) => num % 2 === 0);

console.log (evenNums);