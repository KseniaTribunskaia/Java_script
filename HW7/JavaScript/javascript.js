"use strict";

// Функция принимает на вход: from, to и obj:
//      * from, to - числа, если переданы не числа, необходимо прервать работу функции;
//      * obj - объект.
// Функция возвращает новый объект с товарами из obj, стоимость которых находится в диапазоне (from;  to]

// let goods = {
//         piano: {
//             title: "Пианино",
//             price: 3000,
//             count: 25
//         },
//         guitar: {
//             title: "Гитара",
//             price: 1200,
//             count: 40
//         },
//         drum: {
//             title: "Барабаны",
//             price: 2700,
//             count: 12
//         },
//         flute: {
//             title: "Флейта",
//             price: 900,
//             count: 50
//         },
//         harp: {
//             title: "Арфа",
//             price: 3400,
//             count: 5
//         }
//     };


let goods = {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5
        }
    };

function getGoodsByPrice(from, to, obj) {
    if (!Number.isInteger(from) && !Number.isInteger(to)) return;
    let newobject = {};
    for (let elem in obj) {
        if (obj[elem].price > from && obj[elem].price <= to) {
          newobject[elem] = obj[elem];
        };
    }
    return newobject;
}
console.log(getGoodsByPrice(100, 3000, goods));

//работает

// Функция принимает на вход: title, countToCart и obj:
//      * title - название товара, который хочет купить пользователь;
//      * countToCart - кодичество товара, который хочет приобрести пользователь;
//      * obj - объект.
//
//  Необходимо найти товар с названием (title):
//      если количество позволяет, то уменьшить количество товара в объекте obj на countToCart,
//      вывести в консоль информацию, что данного товара достаточно на складе,
//      если не позволяет, то вывести информацию об этом в консоль.

//  Если товар с названием (title) не был найден вывести сообщение об этом в консоль
//
//  Функция ничего не возвращает.

goods = {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5
        }
    };

function getByTitle(title, countToCart, obj) {
  for (let elem in obj) {
    if (title === obj[elem].title) {
      if (obj[elem].count > countToCart ) {
        console.log("Есть товар");
        obj[elem].count -= countToCart;
      } else {
        console.log("Товара нет");
      }
      return;
    }
  }
  console.log("Товар не найден");
}

getByTitle("Пианино", 1, goods);

//работает
