"use strict";
exports.__esModule = true;
var imdb_1 = require("./imdb");
var movie_1 = require("../Movie/movie");
var fs = require("fs");
var peli1 = new movie_1.Movie("Joker", 2019, "american", "drama");
var peli2 = new movie_1.Movie("Batman", 2015, "american", "drama");
var imdbs = new imdb_1.Imdb([peli1, peli2]);
console.log(imdbs.movies);
var dataJson = JSON.stringify(imdbs);
fs.writeFile("imdbBBDD.json", dataJson, function (err) {
    if (err) {
        console.log(err);
    }
});
console.log(dataJson);
var parsedJson;
fs.readFile("imdbBBDD.json", "utf8", function (err, data) {
    if (err) {
        console.log(err);
    }
    parsedJson = JSON.parse(data);
    console.log("leer: ", parsedJson);
});
console.log(dataJson);
