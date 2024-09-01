class State {
    
    #firstTouch;
    #heroShoots;
    #foeShoots;
    #foes;
    #numberOfTaps;
    
    constructor() {
        
        this.#firstTouch = true;
        this.#numberOfTaps = 0;
        this.#heroShoots = [];
        this.#foes = [];
        this.#foeShoots = [];
    }
    
    get numberOfTaps() {
        
        return this.#numberOfTaps;
    }
    
    set numberOfTaps(value) {
        
        this.#numberOfTaps = value;
    }
    
    get foeShoots() {
        
        return this.#foeShoots;
    }

    set foeShoots(value) {
        
        this.#foeShoots = value;
    }

    get foes() {
        
        return this.#foes;
    }

    set foes(foes) {
        
        this.#foes = foes;
    }

    get heroShoots() {
        
        return this.#heroShoots;
    }
    
    set heroShoots(value) {
        
        this.#heroShoots = value;
    }

    get firstTouch() {
        
        return this.#firstTouch;
    }

    set firstTouch(value) {
        
        this.#firstTouch = value;
    }
}