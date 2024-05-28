class Main {

	#playButton;

	constructor() {

		this.#playButton = document.getElementById('play');
		this.#registerEvent();
	}

	#registerEvent() {

		this.#playButton.addEventListener('click', this.#play);
	}

	#play(){

		const level = new Level(new Melencolie(), 'Easy');
		const sidereus = new Sidereus(level);
		sidereus.gameLoop();
	}
}