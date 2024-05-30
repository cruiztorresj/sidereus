class Sidereus {

	#level;
	#drawer;

	constructor(level) {

		this.#level = level;
		this.#drawer = new Drawer();
		this.moveHero = this.moveHero.bind(this);
		this.#registerDrawerEvents();
	}

	gameLoop() {

		this.#drawer.drawHero(this.#level.hero);
		this.#level.hero.coordX = 65;
		this.#drawer.drawHero(this.#level.hero);
	}

	#registerDrawerEvents() {

		this.#drawer.sideral.addEventListener('touchmove', this.moveHero);
	}

	moveHero(evt) {

		evt.preventDefault();

		const touches = evt.changedTouches;

		const touched = touches.item(0);

		const convertedCoordX =
			Utils.convertPageCoordToHeroCoord(touched.pageX);
		
		console.log(`pageX: ${touched.pageX} *** ConvertedX: ${convertedCoordX}`);
	}

}