export class Movie {

    // Modelo utilizado para sacar la info de las peliculas 
    constructor(
        public title: string,
        public episode_id: string,
        public opening_crawl: string,
        public director: string,
        public producer: string,
        public release_date: string,
    ){}
}