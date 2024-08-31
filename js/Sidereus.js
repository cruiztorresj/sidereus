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
		
		this.play = this.play.bind(this);
		this.heroShoot = this.heroShoot.bind(this);
		this.moveHero = this.moveHero.bind(this);
	}

	#setUp() {

		this.#starGenerator();
		this.#level.hero.setInitialPosition(this.#drawer.getDrawingArea().width,
											this.#drawer.getDrawingArea().height);
		this.#level.boss.startMachinery(this.#state, this.#level.difficulty, this.#drawer.getDrawingArea().width);
		this.#level.boss.startAttackEngine(this.#state, this.#level.difficulty);
		this.#level.boss.manageMachinery(this.#state);
		this.#registerDrawerEvents();
	}

	gameLoop() {

		this.#setUp();
		requestAnimationFrame(this.play);
	}
	
	play() {
		
		// TODO 
		// collision detection
		// end game
		this.#draw();
		this.#update();

		requestAnimationFrame(this.play);
	}

	#draw() {

		this.#drawer.clearCanvas();

		this.#drawer.drawHero(this.#level.hero);
		this.#drawer.drawStars(this.#stars);
		this.#drawer.drawFoes(this.#state.foes);
		this.#drawer.drawShoots(this.#state.heroShoots);
		this.#drawer.drawShoots(this.#state.foeShoots);
	}

	// TODO each of the logic units inside this function should be extracted in their own functions.
	#update() {

		// Move stars
		for (const star of this.#stars) {

			star.coordY += star.speed;
		}

		// Move hero bullets towards foes
		for (const bullet of this.#state.heroShoots) {

			bullet.coordY -= bullet.speed;
		}
		
		// Move foe bullets towards Hero
		for (const bullet of this.#state.foeShoots) {

			bullet.coordY += bullet.speed;
		}

		// Move hero bullets towards foes
		for (const bullet of this.#state.heroShoots) {

			bullet.coordY -= bullet.speed;
		}

		// Remove passed by foes

		// Move foes towards hero
		for (const foe of this.#state.foes) {

			// You shall move between the screen limits, check that condition too!
			if (Utils.getRandom(2) === 0) { // Left direction, TODO implement an enumeration.

				foe.coordX -= foe.speed;
			} else {

				foe.coordX += foe.speed;
			}
			foe.coordY += foe.speed;
		}
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

	#starGenerator() {

		for(let i = 0; i < 100; i++) {

			this.#stars.push(new Star(Utils.getRandom(this.#drawer.getDrawingArea().width),
						Utils.getRandom(this.#drawer.getDrawingArea().height), 'white', 1, 2));
		}

		setInterval(() => {

			for(let i = 0; i < 20; i++) {

				this.#stars.push(new Star(Utils.getRandom(this.#drawer.getDrawingArea().width),
							-Utils.getRandom(this.#drawer.getDrawingArea().height), 'white', 1, 2));
			}

			if(this.#stars.length >= 200) { // Magic numbers! TODO fix

				this.#stars.splice(0, 100);
			}

		}, 2000);
	}
}