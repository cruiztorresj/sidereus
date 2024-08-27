class Star {

    #coordX;
    #coordY;
    #color;

    constructor(coordX, coordY, color) {

        this.#coordX = coordX;
        this.#coordY = coordY;
        this.#color = color;
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