"use strict";


let numberOfFilms = prompt('Сколько фильмов чекнул?');

let last = prompt('Ласт фильм?', 0);

let nrav = prompt('Оценка?', 0);

let count = numberOfFilms;

let personalMovieDB = {

    movies: {

    },

    actors: {

    },

    genres: [],

    privat: false
};

personalMovieDB.movies[0] = last;

personalMovieDB.movies[1] = nrav;

console.log(count);

console.log(personalMovieDB.movies);