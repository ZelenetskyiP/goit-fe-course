'use strict'


let userInput;
const numbers = [];
let total = 0 ;





do {
  userInput = prompt('Введите число');

  numbers.push(userInput);

//   console.log(numbers);

} while (userInput !== null);

numbers.pop();

for(let i = 0; i < numbers.length; i++) {
    total = total + parseInt(numbers[i]);
    
}

alert(`Общая сумма чисел равна ${ total }`);





