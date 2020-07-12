export class Movie {
    public title:string;
    public releaseYear:number;
    public actors:string;
    public nationality:string;
    public director:string;
    public writer:string;
    public language:string;
    public plataform:string;
    public isMCU:string;
    public mainCharacterName:string;
    public producer:string;
    public distributor:string;
    public genre:string;

    constructor (title:string , releaseYear:number , nationality:string , genre:string) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }

    public showMovieData () {
        console.log(
        this.distributor,
        this.title,
        this.releaseYear,
        this.actors,
        this.nationality,
        this.director,
        this.writer,
        this.language,
        this.plataform,
        this.isMCU,
        this.mainCharacterName,
        this.producer,
        this.distributor,
        this.genre
        )

    }
}