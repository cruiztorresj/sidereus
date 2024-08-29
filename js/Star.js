class Star {

    #coordX;
    #coordY;
    #color;
    #size;
    #speed;
    
    constructor(coordX, coordY, color, size, speed) {
        
        this.#coordX = coordX;
        this.#coordY = coordY;
        this.#color = color;
        this.#size = size;
        this.#speed = speed;
    }
    
    get speed() {
        
        return this.#speed;
    }

    set speed(value) {
        
        this.#speed = value;
    }

    get size() {
        
        return this.#size;
    }

    set size(value) {
        
        this.#size = value;
    }

    get coordX() {

        return this.#coordX;
    }
    
    get coordY() {

        return this.#coordY;
    }

    set coordX(coordX) {

        this.#coordX = coordX;
    }
    
    set coordY(coordY) {

        this.#coordY = coordY;
    }

    get color() {

        return this.#color;
    }

    set color(color) {

        this.#color = color;
    }
}