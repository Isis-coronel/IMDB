"use strict";
exports.__esModule = true;
var imdb_1 = require("./imdb");
var movie_1 = require("../Movie/movie");
var peli1 = new movie_1.Movie("Joker", 2019, "american", "drama");
var peli2 = new movie_1.Movie("Batman", 2015, "american", "drama");
var imdbs = new imdb_1.Imdb([peli1, peli2]);
console.log(imdbs.movies);
