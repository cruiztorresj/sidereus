class Foe {

    #coordX;
    #coordY;
    #speed;
    #color;
    
    constructor(coordX, coordY, speed, color) {
        
        this.#coordX = coordX;
        this.#coordY = coordY;
        this.#speed = speed;
        this.#color = color;
    }

    get color() {
        
        return this.#color;
    }
    
    set color(value) {
        
        this.#color = value;
    }
    
    get speed() {
        
        return this.#speed;
    }
    
    set speed(value) {
        
        this.#speed = value;
    }

    get coordY() {
        
        return this.#coordY;
    }

    set coordY(value) {

        this.#coordY = value;
    }

    get coordX() {
        
        return this.#coordX;
    }

    set coordX(value) {
        
        this.#coordX = value;
    }
    
}