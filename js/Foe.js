class Foe {

    #id;
    #coordX;
    #coordY;
    #speed;
    #color;
    #size;
    #isActive;
    
    constructor(id, coordX, coordY, speed, color, size) {
        
        this.#id = id;
        this.#coordX = coordX;
        this.#coordY = coordY;
        this.#speed = speed;
        this.#color = color;
        this.#size = size;
        this.#isActive = true;
    }
    
    get isActive() {
        
        return this.#isActive;
    }
    
    set isActive(value) {
        
        this.#isActive = value;
    }

    get size() {
        
        return this.#size;
    }

    set size(value) {
        
        this.#size = value;
    }
    
    get id() {
        
        return this.#id;
    }

    set id(value) {
        
        this.#id = value;
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