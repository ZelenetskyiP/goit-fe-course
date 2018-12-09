"use strict";

let userInput;
const numbers = [];
let total = 0;

do {
  userInput = prompt("Введите число", "");

  if (Number.isNaN(+userInput)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    if (userInput) {
      numbers.push(+userInput);
    }
  }
} while (userInput !== null);

if (numbers.length > 0) {
  for (let sum of numbers) {
    total += sum;
  }

  alert(`Общая сумма чисел равна ${total}`);
}

console.log(total);
console.log(numbers);
