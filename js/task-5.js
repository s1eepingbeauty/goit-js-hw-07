/*Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
подставляет его текущее значение в span#name-output. Если инпут пустой, 
в спане должна отображаться строка 'незнакомец'.*/

const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', showName => {
  showName.target.value !== ''
    ? (spanRef.textContent = showName.target.value)
    : (spanRef.textContent = 'незнакомец');
});
