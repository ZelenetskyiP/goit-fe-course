"use strict";

let userInput;
const numbers = [];
let total = 0;

do {
  userInput = prompt("Введите число", "");
  if (isNaN(userInput)) {
    alert("Было введено не число, попробуйте еще раз");
  } else if (userInput) {
    numbers.push(Number(userInput));
  }
  
} while (userInput !== null);

for (let sum of numbers) {
  total += sum;
}
if (total) {
  alert(`Общая сумма чисел равна ${total}`);
}

console.log(total);
console.log(numbers);




