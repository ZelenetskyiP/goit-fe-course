"use strict";

let userInput;
const numbers = [];
let total = 0;

do {
  userInput = Number(prompt("Введите число", ""));

  if (Number.isNaN(userInput)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    numbers.push(userInput);
  }
} while (userInput !== 0);

if (numbers.length > 1) {
  for (let sum of numbers) {
    total += sum;
  }

  alert(`Общая сумма чисел равна ${total}`);
}

// console.log(total);
// console.log(numbers);
