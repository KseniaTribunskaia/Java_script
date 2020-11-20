"use strict";

// 1. Задача
//  Напишите функцию, которая в зависимости от переданного в нее целочисленного
// // аргумента count, будет возвращать слово "товар" в нужно форме
// ("12 товаров", но "22 товара", "1 товар", "97 товаров" и тд).

function tovar(count) {
  let tovarNumber = `${count} товар`;
  if (count < 0 || !Number.isInteger(count)) return false;
  if (count %10 === 1) return tovarNumber;
  if (1 < count %10 && count %10 < 5) return tovarNumber + "a";
  if (count %10 === 0 || count %10 >= 5) return tovarNumber + "ов";
}
console.log(tovar(10));
