/*Напиши скрипт, который реагирует на изменение 
значения input#font-size-control (событие input) 
и изменяет инлайн-стиль span#text обновляя свойство font-size. 
В результате при перетаскивании ползунка будет меняться размер текста.*/

const scrollRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

scrollRef.addEventListener('input', () => {
  spanRef.style.fontSize = `${parseInt(scrollRef.valueAsNumber)}px`;
});
