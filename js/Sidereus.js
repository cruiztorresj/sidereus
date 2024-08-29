class Sidereus {

	#level;
	#drawer;
	#stars;
	#state;

	constructor(level, drawer, state) {

		this.#level = level;
		this.#drawer = drawer;
		this.#state = state;
		this.#stars = [];
		this.#generateStars();
		this.#level.hero.setInitialPosition(this.#drawer.getDrawingArea().width,
											this.#drawer.getDrawingArea().height);
		this.moveHero = this.moveHero.bind(this);
		this.draw = this.draw.bind(this);
		this.heroShoot = this.heroShoot.bind(this);
		this.#registerDrawerEvents();
	}

	gameLoop(sate) {
		
		requestAnimationFrame(this.draw);
	}
	
	draw() {
		this.#drawer.clearCanvas();

		this.#drawer.drawHero(this.#level.hero);

		this.#drawer.drawStars(this.#stars);
		this.#drawer.drawHeroShoots(this.#state.heroShoots);

		// update function
		for (const star of this.#stars) {

			star.coordY += star.speed;
		}

		for (const bullet of this.#state.heroShoots) {

			bullet.coordY -= bullet.speed;
		}

		
		requestAnimationFrame(this.draw);
	}

	#registerDrawerEvents() {

		this.#drawer.registerHeroEvent('touchmove', this.moveHero);
		this.#drawer.registerHeroEvent('touchstart', this.heroShoot);
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

						this.#level.hero.coordX -= 5; // TODO: Magic numbers! Getting rif of
					}
				} else { // Moving right

					if (convertedCoordX <= this.#drawer.getDrawingArea().width - this.#level.hero.radiusTwo) {

						this.#level.hero.coordX += 5; // TODO: Magic numbers! Getting rif of
					}
				}
			}

			this.#drawer.drawHero(this.#level.hero);
		}
	}

	heroShoot(evt) {

		evt.preventDefault();

		if (!this.#state.firstTouch) {

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

			if (convertedCoordY > 30) { // Shoots are triggered touching above the ship

				this.#state.heroShoots.push(new Bullet(this.#level.hero.coordX - 5,
								this.#level.hero.coordY - this.#level.hero.radiusTwo, 10, 'hotpink'));
			}
		}
	}

	#generateStars() {

		// TODO: Random number from 1 to 10, generate n stars, wait m seconds, repeat
		for(let i = 0; i < 10; i++) {

			this.#stars.push(new Star(Utils.getRandom(this.#drawer.getDrawingArea().width),
						Utils.getRandom(this.#drawer.getDrawingArea().height), 'white', 1, 2));
		}
	}
}