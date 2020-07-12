"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nationality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }
    Movie.prototype.showMovieData = function () {
        console.log(this.distributor, this.title, this.releaseYear, this.actors, this.nationality, this.director, this.writer, this.language, this.plataform, this.isMCU, this.mainCharacterName, this.producer, this.distributor, this.genre);
    };
    return Movie;
}());
exports.Movie = Movie;
