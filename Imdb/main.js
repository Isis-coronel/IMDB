"use strict";
exports.__esModule = true;
var imdb_1 = require("./imdb");
var movie_1 = require("../Movie/movie");
var fs = require("fs");
var prompt = require("prompt");
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
imdbs.escribirEnFicheroJSON("NuevoFichero.json");
imdbs.obtenerInstanciaIMDB("imdbBBDD.json");
prompt.start();
prompt.get(["title", "releaseYear", "nationality", "genre"], function (err, result) {
    if (err) {
        return onErr(err);
    }
    var movie = new movie_1.Movie(result.title, result.releaseYear, result.nationality, result.genre);
    imdbs.addMovie(movie);
    fs.writeFile('imdbBBDD.json', JSON.stringify(imdbs.movies), function (err) {
        if (err)
            throw err;
        console.log('Saved!');
    });
});
function onErr(err) {
    console.log(err);
    return 1;
}
