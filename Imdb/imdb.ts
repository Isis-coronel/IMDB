import {Movie} from "../Movie/movie";
import * as fs from 'fs';
export class Imdb {
    public movies:Movie[];
    constructor (movies:Movie[]){
        this.movies = movies;
    }
    public addMovie (movie:Movie){
        this.movies.push(movie);
    }
    public escribirEnFicheroJSON(nombreFichero: string) {
        let data = JSON.stringify(this.movies)
        fs.writeFile(nombreFichero, data , (err) => {
            if (err) {
                console.log(err);
            }
        })

    }
    public obtenerInstanciaIMDB(nombreFichero:string) {
        fs.readFile(nombreFichero, "utf8", (err, data) => {
            if (err) {
                console.log(err);
            }
            
            console.log("obtener", new Imdb(JSON.parse(data)))
            return new Imdb(JSON.parse(data));
        })

    }
}