/*Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input 
и нажимает кнопку Создать, после чего рендерится коллекция. 
При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.*/

const ref = {
  boxesContainer: document.querySelector('#boxes'),
  buttonRender: document.querySelector('button[data-action="render"]'),
  buttonDestroy: document.querySelector('button[data-action="destroy"]'),
  inputValue: document.querySelector('#controls input'),
};

function getAmount() {
  const amount = ref.inputValue.value;
  createBoxes(amount);
}
function random() {
  return Math.floor(Math.random() * 256);
}
function createBoxes(amount) {
  const boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const BOX = document.createElement('div');
    BOX.style.width = `${boxSize + i * 10}px`;
    BOX.style.height = `${boxSize + i * 10}px`;
    BOX.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
    BOX.style.marginRight = '5px';
    ref.boxesContainer.appendChild(BOX);
  }
}
function destroyBoxes() {
  ref.boxesContainer.innerHTML = '';
  ref.inputValue.value = 0;
}

ref.buttonRender.addEventListener('click', getAmount);
ref.buttonDestroy.addEventListener('click', destroyBoxes);
