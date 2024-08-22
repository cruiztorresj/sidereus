class State {
    
    #firstTouch;

    constructor() {
        
        this.#firstTouch = true;
    }

    get firstTouch() {
        return this.#firstTouch;
    }

    set firstTouch(value) {
        this.#firstTouch = value;
    }
}