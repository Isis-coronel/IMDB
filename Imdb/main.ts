import {Imdb} from "./imdb"
import {Movie} from "../Movie/movie"

import * as fs from 'fs';
import * as prompt from "prompt";
let peli1 = new Movie ("Joker", 2019, "american", "drama");
let peli2 = new Movie ("Batman", 2015, "american", "drama");

let imdbs = new Imdb([peli1,peli2]);
console.log(imdbs.movies)

let dataJson = JSON.stringify(imdbs);

fs.writeFile("imdbBBDD.json", dataJson, (err) => {
    if (err) {
        console.log(err);
    }
})

console.log(dataJson);
let parsedJson;
fs.readFile("imdbBBDD.json", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    }
    parsedJson = JSON.parse(data);
    console.log("leer: ", parsedJson);
})

imdbs.escribirEnFicheroJSON("NuevoFichero.json");
imdbs.obtenerInstanciaIMDB("imdbBBDD.json")

prompt.start();

prompt.get(["title", "releaseYear","nationality","genre"], function (err, result) {
    if (err) { return onErr(err); }
    let movie = new Movie (result.title,result.releaseYear,result.nationality,result.genre)
    imdbs.addMovie(movie);
    fs.writeFile('imdbBBDD.json', JSON.stringify(imdbs.movies), function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
});

function onErr(err) {
    console.log(err);
    return 1;
}