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
	}

	#registerDrawerEvents() {

		this.#drawer.sideral.addEventListener('touchmove', this.moveHero);
	}

	moveHero(evt) {

		evt.preventDefault();

		const touches = evt.changedTouches;

		const touched = touches.item(0);

		const convertedCoordX =
			Utils.convertPageCoordToHeroCoord(touched.clientX, 'x');

		const convertedCoordY =
			Utils.convertPageCoordToHeroCoord(touched.clientY, 'y');

		const CoordXTouchDistance = Math.abs(this.#level.hero.coordX - convertedCoordX);

		if (convertedCoordY < 2) { // TODO: Magic Number to be removed

			if (CoordXTouchDistance <= this.#level.hero.radiusTwo) {

				if (convertedCoordX < this.#level.hero.coordX) {

					this.#level.hero.coordX -= 1;
				} else {

					this.#level.hero.coordX += 1;
				}
			}

			this.#drawer.clearCanvas();
			this.#drawer.drawHero(this.#level.hero);
		}
	}

}