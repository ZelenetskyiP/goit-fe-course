'use strict'


let userInput;
const numbers = [];
let total = 0 ;





do {
  userInput = Number(prompt('Введите число', ''));
  numbers.push(userInput);
  console.log(numbers);
} while ((userInput !== null) && (Number(userInput)));

// for(let i = 0; i < numbers.length; i++) {
//     total = total + parseInt(numbers[i]);
// }

for (let sum of numbers) {
  total += sum;
};
 

if (total !== 0) {
alert(`Общая сумма чисел равна ${ total }`);
}









