class State {
    
    #firstTouch;
    #heroShoots;
    #foeShoots;
    #foes;
    
    constructor() {
        
        this.#firstTouch = true;
        this.#heroShoots = [];
        this.#foes = [];
        this.#foeShoots = [];
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