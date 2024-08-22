class Main {

	#gui;
	#state;

	constructor() {
		
		this.#gui = new Gui();
		this.#state = new State();
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
		const level = new Level(new Melencolie(), Constants.LEVEL_EASY);
		const sidereus = new Sidereus(level);
		sidereus.gameLoop();
	}
}