/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта) +

2) Изменить жанр фильма, поменять "комедия" на "драма" +

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

//'use strict';
document.addEventListener('DOMContentLoaded', () => {
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
  const promoInteractiveList = document.querySelector(
    '.promo__interactive-list'
  );
  const formAdd = document.querySelector('.add');
  const newMovieInput = formAdd.querySelector('.adding__input');
  const newMovieButton = formAdd.querySelector('button');
  const check = formAdd.querySelector('[type="checkbox"]');

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
  const sortArray = (arr) => {
    arr.sort();
  };

  function drawItems(films, parent) {
    parent.innerHTML = '';
    sortArray(films);
    films.forEach((item, i) => {
      parent.innerHTML += `<li class="promo__interactive-item">${
        i + 1
      }. ${item}<div class="delete"></div></li>`;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        drawItems(films, parent);
      });
    });
  }
  drawItems(movieDB.movies, promoInteractiveList);
  // movieDB.movies.forEach((item, i) => {
  //   const li = document.createElement('li');
  //   li.innerHTML = `<li>${i + 1} ${item}</li>`;
  //   promoInteractiveList.append(li);
  // });

  formAdd.addEventListener('submit', (event) => {
    event.preventDefault();
    let newFilm = newMovieInput.value;
    let favorite = check.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }
      if (favorite) {
        console.log('favorite film');
      }
      movieDB.movies.push(newFilm);
      sortArray(movieDB.movies);
      drawItems(movieDB.movies, promoInteractiveList);
    }
    event.target.reset();
  });

  // моя реализация

  //   function addNewMovie(event) {
  //     event.preventDefault();
  //     let value = newMovieInput.value;
  //     let v = '';
  //     if (value.length > 21) {
  //       v = value.slice(0, 21);
  //       v += '...';
  //     } else {
  //       v = value;
  //     }
  //     console.log(v.length);
  //     movieDB.movies.push(v);
  //     drawItems(movieDB.movies, promoInteractiveList);
  //   }

  //   newMovieButton.addEventListener('click', addNewMovie);
});
