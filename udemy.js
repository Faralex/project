"use strict";

let numberOfFilms;

let a;

let b;

function start() {
    numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');
    }
}

start();

let personalMovieDB = {

    count: numberOfFilms,

    movies: {

    },

    actors: {

    },

    genres: [],

    privat: false,
};

function rememberMyFilms() {
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
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Ты посмотрел слишком мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert('Вы дефолтный зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Воу, да вы киноман.');
    } else {
        alert('Произошла ошибка. Как вы это сделали?');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        console.log('unlucky');
    }
}
showMyDB();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        let genress = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres.push(genress);
    }
}

writeYourGenres();