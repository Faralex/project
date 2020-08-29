"use strict";

let numberOfFilms = prompt('Сколько фильмов посмотрели?');

let a;

let b;


let personalMovieDB = {

    count: numberOfFilms,

    movies: {

    },

    actors: {

    },

    genres: [],

    privat: false,
};



for (let i = 0; i < 1; i++) {

    a = prompt('Ласт фильм?');

    b = prompt('Оценка?');

    if (a != '' && b != '' && a != null && b != null & a.length < 10) {
        personalMovieDB.movies[a] = b;
        console.log('gratz');
    } else {
        i--;
        console.log('unlucky');
    }


}

if (personalMovieDB.count < 10) {
    alert('Ты посмотрел слишком мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert('Вы дефолтный зритель');
} else if (personalMovieDB.count > 30) {
    alert('Воу, да вы киноман.');
} else {
    alert('Произошла ошибка. Как вы это сделали?');
}

console.log(personalMovieDB);