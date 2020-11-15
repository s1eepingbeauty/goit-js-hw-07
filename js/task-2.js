/*Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
после чего вставит все li за одну операцию в список ul.ingredients. 
Для создания DOM-узлов используй document.createElement().*/

const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const createLiItem = item => {
  const liRef = document.createElement('li');
  liRef.textContent = item;
  return liRef;
};

const liItem = ingredients.map(ingridient => createLiItem(ingridient));

const ulRef = document.querySelector('#ingredients');
ulRef.append(...liItem);
