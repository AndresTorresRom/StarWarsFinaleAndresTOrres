export class Specie {

    // Modelo utilizado para sacar la info de las especies existentes en las peliculas 
    
    constructor(
        public name: string,
        public language: string,
        public classification: string,
        public average_height: string,
        public designation: string,
        public average_lifespan: string,
    ){}
}