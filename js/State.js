class State {
    
    #firstTouch;
    #heroShoots;
    
    constructor() {
        
        this.#firstTouch = true;
        this.#heroShoots = [];
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