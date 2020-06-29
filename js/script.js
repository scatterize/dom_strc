/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта) +

2) Изменить жанр фильма, поменять "комедия" на "драма" +

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

//'use strict';
const movieDB = {
  movies: [
    'Логан',
    'Лига справедливости',
    'Ла-ла лэнд',
    'Одержимость',
    'Скотт Пилигрим против...',
  ],
};

const adv = document.querySelectorAll('.promo__adv img');
const promoBg = document.querySelector('.promo__bg');
const promoGenre = promoBg.querySelector('.promo__genre');
const promoInteractiveList = document.querySelector('.promo__interactive-list');

//1
adv.forEach((item) => {
  item.remove();
});
//2
//promoGenre.innerHTML = 'ДРАМА';
promoGenre.textContent = 'ДРАМА';

//3
//promoBg.style.background = 'url("../img/bg.jpg")';
promoBg.style.backgroundImage = 'url("../img/bg.jpg")';

//4
promoInteractiveList.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((item, i) => {
  promoInteractiveList.innerHTML += `<li class="promo__interactive-item">${
    i + 1
  }. ${item}<div class="delete"></div></li>`;
});

// movieDB.movies.forEach((item, i) => {
//   const li = document.createElement('li');
//   li.innerHTML = `<li>${i + 1} ${item}</li>`;
//   promoInteractiveList.append(li);
// });
