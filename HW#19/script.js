'use strict';

// 1) Расширьте прототип обьекта и добавьте туда функцию которая будет принимать во вход 2 числа.
// Функция должна складывать эти 2 числа и выводить результат.
// const player = {
//     nickname: 's1mple',
//     level: 1000000,
// };

// Object.prototype.calculate = function(a, b) {
//     return a + b
// };

// console.log(player);

// console.log(player.calculate(400,20));

// 2) Есть обьект const user = {name: "Kate", age:20, city: London}. Создайте новый обьект прототипом которого будет user. (Object.create())
// Выведите на консоль прототип  нового обьекта (Object.getPrototypeOf()). Затем с помощью Object.setPrototypeOf()  удалите прототип у user.
// const user = {
//     name: "Kate",
//     age: 20,
//     city: 'London'
// };
// const player = Object.create(user);
//
// player.name = 'Sasha';
//
// console.log(Object.getPrototypeOf(player));
//
// Object.setPrototypeOf(user, null);
//
// console.log(user);