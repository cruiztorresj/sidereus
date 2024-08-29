class Drawer {
	
	#gui;

	constructor(gui) {

		this.#gui = gui;
	}

	drawHero(hero){

		if (hero instanceof Melencolie) {

			this.#drawMelencolie(hero);
		}
	}

	registerMoveHeroEvent(handler) {

		this.#gui.sideral.addEventListener('touchmove', handler);
	}

	clearCanvas() {

		this.#gui.canvasContext.clearRect(0, 0, this.#gui.sideral.width, this.#gui.sideral.height);
	}

	#drawMelencolie(hero) {

		this.#gui.canvasContext.beginPath();
		this.#gui.canvasContext.strokeStyle = hero.radiusOneColor;
		this.#gui.canvasContext.arc (hero.coordX, hero.coordY, hero.radiusOne * 0.1, 0, 2 * Math.PI);
		this.#gui.canvasContext.closePath();
		this.#gui.canvasContext.stroke();

		this.#gui.canvasContext.beginPath();
		this.#gui.canvasContext.strokeStyle = hero.radiusOneColor;
		this.#gui.canvasContext.arc (hero.coordX, hero.coordY, hero.radiusOne, 0, 2 * Math.PI);
		this.#gui.canvasContext.closePath();
		this.#gui.canvasContext.stroke();

		this.#gui.canvasContext.beginPath();
		this.#gui.canvasContext.strokeStyle = hero.radiusTwoColor;
		this.#gui.canvasContext.arc (hero.coordX, hero.coordY, hero.radiusTwo, 0, 2 * Math.PI);
		this.#gui.canvasContext.closePath();
		this.#gui.canvasContext.stroke();

		this.#gui.canvasContext.beginPath();
		this.#gui.canvasContext.strokeStyle = hero.weapon.color;
		this.#gui.canvasContext.moveTo(hero.getWeaponCoord(1, 'x'), hero.getWeaponCoord(1, 'y'));
		this.#gui.canvasContext.lineTo(hero.coordX, hero.coordY);
		//this.#gui.canvasContext.closePath();
		//this.#gui.canvasContext.stroke();
		
		//this.#gui.canvasContext.beginPath();
		this.#gui.canvasContext.strokeStyle = hero.weapon.color;
		//this.#gui.canvasContext.moveTo(hero.coordX, hero.coordY);
		this.#gui.canvasContext.lineTo(hero.getWeaponCoord(2, 'x'), hero.getWeaponCoord(2, 'y'));
		//this.#gui.canvasContext.closePath();
		this.#gui.canvasContext.stroke();
	}

	drawStars(stars) {

		for (const star of stars) {

			this.#gui.canvasContext.strokeStyle = star.color;
			this.#gui.canvasContext.beginPath();
			this.#gui.canvasContext.moveTo(star.coordX, star.coordY);
			this.#gui.canvasContext.arc(star.coordX, star.coordY, star.size, 0, Math.PI * 2);
			this.#gui.canvasContext.closePath();
			this.#gui.canvasContext.stroke();
		}
		
	}

	getDrawingArea() {

		return this.#gui.sideralBox;
	}
}