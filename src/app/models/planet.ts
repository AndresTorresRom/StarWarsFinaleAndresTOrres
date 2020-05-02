export class Planet {

// Modelo utilizado para sacar la info de los planetas 
 
    constructor(
        public name: string,
        public rotation_period: string,
        public orbital_period: string,
        public diameter: string,
        public climate: string,
        public gravity: string,
    ){}
}