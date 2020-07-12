"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var fs = require("fs");
var Imdb = /** @class */ (function () {
    function Imdb(movies) {
        this.movies = movies;
    }
    Imdb.prototype.addMovie = function (movie) {
        this.movies.push(movie);
    };
    Imdb.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        var data = JSON.stringify(this.movies);
        fs.writeFile(nombreFichero, data, function (err) {
            if (err) {
                console.log(err);
            }
        });
    };
    Imdb.prototype.obtenerInstanciaIMDB = function (nombreFichero) {
        fs.readFile(nombreFichero, "utf8", function (err, data) {
            if (err) {
                console.log(err);
            }
            console.log("obtener", new Imdb(JSON.parse(data)));
            return new Imdb(JSON.parse(data));
        });
    };
    return Imdb;
}());
exports.Imdb = Imdb;
