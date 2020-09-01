"use strict";

let numberOfFilms;

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

    start: function start() {
        numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');
        }
    },



    remember: function rememberMyFilms() {
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
    },

    detect: function detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            alert('Ты посмотрел слишком мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert('Вы дефолтный зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Воу, да вы киноман.');
        } else {
            alert('Произошла ошибка. Как вы это сделали?');
        }
    },

    show: function showMyDB() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log('unlucky');
        }
    },

    toggle: function toggleVisibleMyDB() {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },

    write: function writeYourGenres() {
        for (let i = 1; i < 4; i++) {

            let genress = prompt(`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.genres[i - 1] = genress;

            if (genress == '' || genress == null) {
                console.log('Еще разок');
                i--;
            } else if (i == 3) {
                personalMovieDB.genres.forEach(function callback(current, index, array) {
                    console.log(`Любимый жанр # ${index+1} - это ${current}`);
                });
            }

        }
    },

};

let start = personalMovieDB.start;
start();

let remember = personalMovieDB.remember;
remember();

let detect = personalMovieDB.detect;
detect();

let show = personalMovieDB.show;
show();

let toggle = personalMovieDB.toggle;
toggle();

let write = personalMovieDB.write;
write();