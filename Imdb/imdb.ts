import {Movie} from "../Movie/movie";
export class Imdb {
    public movies:Movie[];
    constructor (movies:Movie[]){
        this.movies = movies;
    }
}