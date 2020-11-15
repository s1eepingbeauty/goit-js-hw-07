/*Напиши скрипт, который бы при потере фокуса на инпуте, 
проверял его содержимое на правильное количество символов.

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.*/

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', check => {
  check.target.value.length <= inputRef.dataset.length
    ? (inputRef.classList = 'valid')
    : (inputRef.classList = 'invalid');
});
