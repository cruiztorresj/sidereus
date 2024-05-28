class Sidereus {

	#level;
	#drawer;

	constructor(level) {

		this.#level = level;
		this.#drawer = new Drawer();
	}

	gameLoop(){

		this.#drawer.drawHero(this.#level.hero);
	}
}