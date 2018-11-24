"use strict";

let userInput;
const numbers = [];
let total = 0;


do {
  userInput = prompt("Введите число", "");
  if (isNaN(userInput)) {
    alert("Было введено не число, попробуйте еще раз");
  } else if (userInput > 0) {
    numbers.push(userInput);
    for (let i = 0; i < numbers.length; i++) {
      numbers[i] = +numbers[i];
    }
  }

} while (userInput !== null);

for (let sum of numbers) {
  total += sum;
}
alert(`Общая сумма чисел равна ${total}`);

console.log(total);


