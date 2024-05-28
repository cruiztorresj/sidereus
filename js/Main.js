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

		const sidereus = new Sidereus();
		const drawer = new Drawer();
		const level = new Level(drawer);
		sidereus.play(level);
	}
}