"use strict";

const adminLogin = "1";
const adminPassword = "2";

const enterCencel = "Отменено пользователем!";
const enterOk = "Добро пожаловать!";
const enterNo = "Доступ запрещен!";
const password = "Введите пароль";
const login = prompt("Введите логин");

if (login === null) {
  alert(enterCencel);
} else if (login !== adminLogin) {
  alert(enterNo);
} else {
  const userEnter = prompt(password);
  if (userEnter === null) {
    alert(enterCencel);
  } 
  if (userEnter !== adminPassword) {
    alert(enterNo);
  } 
  if (userEnter === adminPassword) {
    alert(enterOk);
  }
}
