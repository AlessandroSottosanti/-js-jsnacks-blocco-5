const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

oddsNumbers = [];

const oddNums = nums.map((num) => {
    const oddsEven = num % 2 === 0 ? 'Pari' : 'Dispari';
    if (oddsEven === 'Pari'){
        oddsNumbers.push(num);
    }
  });
  
  console.log (oddsNumbers);