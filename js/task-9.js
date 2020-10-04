const isLoginValid = (login, min = 4, max = 16) =>
  login.length >= min && login.length <= max ? true : false;

const isLoginUnique = (allLogins, login) =>
  !allLogins.includes(login) ? true : false;

function addLogin(allLogins, login) {
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;

  if (!isLoginValid(login)) {
    message = ERROR;
    return message;
  }

  if (!isLoginUnique(allLogins, login)) {
    message = REFUSAL;
    return message;
  }

  allLogins.push(login);
  message = SUCCESS;
  return message;
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

console.log(addLogin(logins, "Ajax"));
// 'Логин успешно добавлен!'

console.log(addLogin(logins, "robotGoogles"));
// 'Такой логин уже используется!'

console.log(addLogin(logins, "Zod"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, "jqueryisextremelyfast"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
