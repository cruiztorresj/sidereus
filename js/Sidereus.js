class Sidereus {

	#level;
	#drawer;
	#stars;

	constructor(level, drawer) {

		this.#level = level;
		this.#drawer = drawer;
		this.#stars = [];
		this.#generateStars();
		this.#level.hero.setInitialPosition(this.#drawer.getDrawingArea().width,
											this.#drawer.getDrawingArea().height);
		this.moveHero = this.moveHero.bind(this);
		this.draw = this.draw.bind(this);
		//this.heroShoot = this.heroShoot.bind(this);
		this.#registerDrawerEvents();
	}

	gameLoop() {

		requestAnimationFrame(this.draw);
	}
	
	draw() {
		this.#drawer.clearCanvas();

		this.#drawer.drawHero(this.#level.hero);

		for (const star of this.#stars) {

			star.coordY += star.speed;
		}

		this.#drawer.drawStars(this.#stars);
		
		requestAnimationFrame(this.draw);
	}

	#registerDrawerEvents() {

		this.#drawer.registerMoveHeroEvent(this.moveHero);
		//this.#drawer.sideral.addEventListener('touchstart', this.heroShoot);
	}

	moveHero(evt) {

		evt.preventDefault();

		const touches = evt.changedTouches;

		const touched = touches.item(0);
		
		const convertedCoordX =
			Utils.convertPageCoordToHeroCoord(touched.clientX - this.#drawer.getDrawingArea().left, 'x',
				this.#drawer.getDrawingArea().width,
				this.#drawer.getDrawingArea().height);

		const convertedCoordY =
			Utils.convertPageCoordToHeroCoord(touched.clientY - this.#drawer.getDrawingArea().top, 'y',
				this.#drawer.getDrawingArea().width,
				this.#drawer.getDrawingArea().height);


		const CoordXTouchDistance = Math.abs(this.#level.hero.coordX - convertedCoordX);

		if (convertedCoordY < 30) { // TODO: Magic Number to be removed

			if (CoordXTouchDistance <= this.#level.hero.radiusTwo) { // Finger touching the ship

				if (convertedCoordX < this.#level.hero.coordX) { // Moving left

					if (convertedCoordX >= this.#level.hero.radiusTwo) {

						this.#level.hero.coordX -= 5;
					}
				} else { // Moving right

					if (convertedCoordX <= this.#drawer.getDrawingArea().width - this.#level.hero.radiusTwo) {

						this.#level.hero.coordX += 5;
					}
				}
			}

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

	#generateStars() {

		// TODO: Random number from 1 to 10, generate n stars, wait m seconds, repeat
		for(let i = 0; i < 10; i++) {

			this.#stars.push(new Star(Utils.getRandom(this.#drawer.getDrawingArea().width),
						Utils.getRandom(this.#drawer.getDrawingArea().height), 'white', 1, 2));
		}
	}
}