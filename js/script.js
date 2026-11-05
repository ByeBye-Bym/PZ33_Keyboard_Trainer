"use strict";

const input = document.querySelector("#keyboard-input");
const lastKey = document.querySelector("#last-key");
const keyCode = document.querySelector("#key-code");
const keyState = document.querySelector("#key-state");
const keyCount = document.querySelector("#key-count");
let count = 0;

// Задание 1. Подключите событие keydown к input.
// Покажите event.key и event.code. Обновите состояние на «Клавиша нажата».

// Задание 2. В том же обработчике увеличивайте счётчик только когда !event.repeat.
input.addEventListener("keydown", (event) => {
  lastKey.textContent = event.key;
  keyCode.textContent = "Код: " + event.code;
  keyState.textContent = "Клавиша нажата";

  if (!event.repeat) {
    count += 1;
    keyCount.textContent = count;
  }
});

// Задание 3. Подключите keyup. Выведите «Клавиша отпущена».
input.addEventListener("keyup", () => {
  keyState.textContent = "Клавиша отпущена";
});


// Задание 4. Для учебного наблюдения подключите keypress и console.log(event.key).
// Помните: keypress устарел и не подходит для нового функционала.
input.addEventListener("keypress", (event) => {
  console.log("keypress:", event.key);
});
