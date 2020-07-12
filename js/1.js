'use strict';

const countries = ['Ukraine', 'Poland', 'Croatia', 'Montenegro', 'France', 'USA'];
const countriesPrice = [100, 200, 300, 400, 500, 600];

let userName;
let userPass;
let userLogName;
let userLogPass;
let userCredits;
let userCountry;
let maxPrice;

do {
  userName = prompt('Укажите Ваше имя: ');
} while (userName === null);

do {
  userPass = prompt('Укажите Ваш пароль: ');
} while (userPass === null);

while (true) {
  do {
    userLogName = prompt('Введите ваше имя для входа: ');
  } while (userLogName === null);

  do {
    userLogPass = prompt('Введите ваш пароль: ');
  } while (userLogPass === null);

  if (userName === userLogName && userPass === userLogPass) {
    console.log('Вы успешно авторизировались');
    break;
  } else {
    console.log('Неверный логин или пароль. Повторите попытку еще раз ');
    continue;
  }
}

userCredits = prompt('Введите сумму тура (максимально 600): ');

let maxUserPrice = 0;

for (const item of countriesPrice) {
  if (item <= userCredits) {
    maxUserPrice = item;
  }
}

console.log(`Ваша сумму для тура: ${maxUserPrice}`);

alert(`Вам доступны туры в следующие страны: ${countries.slice(0, countriesPrice.indexOf(maxUserPrice) + 1)}`);

userCountry = prompt('Выбирите страну, куда хотите поехать: ');

let userCountryIndex = 0;

for (const country of countries) {
  if (userCountry === country) {
    console.log(`Вы выбрали тур в ${country}`);
    userCountryIndex = countries.indexOf(country);
    break;
  }
}

const costPrice = countriesPrice[userCountryIndex];

console.log(`Поздравляем, тур в ${userCountry} куплен. У вас осталось на счету ${userCredits - costPrice}`);
