import {Imdb} from "./imdb"
import {Movie} from "../Movie/movie"

import * as fs from 'fs';
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