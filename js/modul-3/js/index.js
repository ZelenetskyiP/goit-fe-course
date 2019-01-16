"use strict";



const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginOk = "Логин успешно добавлен!";
const isLoginBusy = "Такой логин уже используется!";
const isLoginError = "Ошибка! Логин должен быть от 4 до 16 символов";

const isLoginValid = (login) => login.length >= 4 && login.length <= 16;

// console.log(isLoginValid(''))

const isLoginUnique = (allLogins, login) => !allLogins.includes(login);
// console.log(isLoginUnique(logins, ""));

const addLogin = function(allLogins, login) {
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      logins.push(login);
      return isLoginOk;
    } else {
      return isLoginBusy;
    }
  } else {
    return isLoginError;
  }
};

// Вызовы функции для проверки
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
