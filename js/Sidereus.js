class Sidereus {

	#level;
	#drawer;

	constructor(level) {

		this.#level = level;
		this.#drawer = new Drawer();
		this.moveHero = this.moveHero.bind(this);
		//this.heroShoot = this.heroShoot.bind(this);
		this.#registerDrawerEvents();
	}

	gameLoop() {

		this.#drawer.drawHero(this.#level.hero);
	}

	#registerDrawerEvents() {

		this.#drawer.sideral.addEventListener('touchmove', this.moveHero);
		//this.#drawer.sideral.addEventListener('touchstart', this.heroShoot);
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

		if (convertedCoordY < 30) { // TODO: Magic Number to be removed

			
			console.log(`clientX: ${touched.clientX} *** convertedX: ${convertedCoordX}`);
			console.log(`CoordXTouchDistance: ${CoordXTouchDistance}`);
			console.log(`heroCoordX: ${this.#level.hero.coordX}`);
			console.log(`-------------------`);

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

	// heroShoot(evt) {

	// 	evt.preventDefault();

	// 	const touches = evt.changedTouches;

	// 	const touched = touches.item(0);

	// 	const convertedCoordY =
	// 		Utils.convertPageCoordToHeroCoord(touched.clientY, 'y');

	// 	console.log(`Hero shooting at: ${convertedCoordY}`);
	// }
}