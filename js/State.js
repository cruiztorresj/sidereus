class State {
    
    #firstTouch;
    #heroShoots;
    #foes;
    
    constructor() {
        
        this.#firstTouch = true;
        this.#heroShoots = [];
        this.#foes = [];
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