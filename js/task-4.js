/*Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса*/

const ref = {
  buttonIncrement: document.querySelector('button[data-action="increment"]'),
  buttonDecrement: document.querySelector('button[data-action="decrement"]'),
  htmlValue: document.querySelector('#value'),
};

let counterValue = 0;

function render() {
  ref.htmlValue.textContent = counterValue;
}
function increment() {
  counterValue += 1;
  render();
}
function decrement() {
  counterValue -= 1;
  render();
}

ref.buttonIncrement.addEventListener('click', increment);
ref.buttonDecrement.addEventListener('click', decrement);
