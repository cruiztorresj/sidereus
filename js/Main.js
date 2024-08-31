class Main {

	#gui;
	#state;
	#sidereus;
	#sidereusBGM;

	constructor(gui, state, sidereus, sidereusBGM) {
		
		this.#gui = gui;
		this.#state = state;
		this.#sidereus = sidereus;
		this.#sidereusBGM = sidereusBGM;
		this.playTheGame = this.playTheGame.bind(this);
		this.playMusic = this.playMusic.bind(this);
		this.#registerEvent();
	}

	#registerEvent() {

		this.#gui.sideral.addEventListener('touchstart', this.playTheGame);
		this.#gui.sideral.addEventListener('click', this.playMusic);
	}

	playTheGame(evt){

		if(this.#state.firstTouch) {

			this.#gui.deletePlayButton();
			this.#state.numberOfTaps += 1;
			this.#state.firstTouch = false;
		}

		this.#gui.sideral.removeEventListener('touchstart', this.playTheGame);		
		this.#sidereus.gameLoop();
	}

	playMusic(evt){

		if(this.#state.numberOfTaps >= 1) {

			this.#state.numberOfTaps += 1;
			this.#sidereusBGM.setAttribute('loop', '');
			this.#sidereusBGM.volume = 0.4;
			this.#sidereusBGM.play();
		}
		this.#gui.sideral.removeEventListener('touchstart', this.playMusic);
	}
}