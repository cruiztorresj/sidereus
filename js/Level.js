class Level {

	#drawer;
	#melencolie;

	constructor(drawer){

		this.#drawer = drawer;
		this.#melencolie = new Melencolie();
	}

	start(){

		this.#drawer.drawHero(this.#melencolie);
	}
}