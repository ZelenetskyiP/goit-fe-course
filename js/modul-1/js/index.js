'use strict'

const adminLogin = "admin";
const adminPassword = "m4ngo1zh4ackz0r";

const enterCencel = "Отменено пользователем!";
const enterOk = "Добро пожаловать!";
const enterNo = "Доступ запрещен!";

const login = prompt("Введите логин");
if (login !== adminLogin) {
  const loginNo = alert(enterNo);
  console.log(loginNo);
} else {
  const password = prompt("Введите пароль");
  console.log(password);
  if (password !== adminPassword) {
    const loginNo = alert(enterNo);
    console.log(loginNo);
  } else {
    const welcomm = alert(enterOk);
    console.log(enterOk);
  }
  if (password === null) {
    const passwordCencel = alert(enterCencel);
    console.log(enterCencel);
  }
}
if (login === null) {
  const loginCencel = alert(enterCencel);
  console.log(loginCencel);
}