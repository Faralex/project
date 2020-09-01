"use strict";

let personalMovieDB = {

    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов посмотрели?', '');
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 1; i++) {

            let a = prompt('Ласт фильм?');

            let b = prompt('Оценка?');

            if (a != '' && b != '' && a != null && b != null & a.length < 10) {
                personalMovieDB.movies[a] = b;
                console.log('gratz');
            } else {
                i--;
                console.log('unlucky');
            }
        }
    },

    detectPersonalLevel: function () {
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

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        } else {
            console.log('unlucky');
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {

            let genress = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genress == '' || genress == null) {
                console.log('Еще разок');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genress;

            }

        }
        personalMovieDB.genres.forEach(function (current, index) {
            console.log(`Любимый жанр # ${index+1} - это ${current}`);
        });
    },

};