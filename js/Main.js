class Main {

	#gui;
	#state;
	#sidereus;

	constructor(gui, state, sidereus) {
		
		this.#gui = gui;
		this.#state = state;
		this.#sidereus = sidereus;
		this.play = this.play.bind(this);
		this.#registerEvent();
	}

	#registerEvent() {

		this.#gui.sideral.addEventListener('touchstart', this.play);
	}

	play(evt){

		if(this.#state.firstTouch) {

			this.#gui.deletePlayButton();
			this.#state.firstTouch = false;
		}

		this.#gui.sideral.removeEventListener('touchstart', this.play);		
		this.#sidereus.gameLoop();
	}
}