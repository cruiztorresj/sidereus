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

	registerHeroEvent(event, handler) {

		this.#gui.sideral.addEventListener(event, handler);
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

	drawShoots(shoots) {

		for (const shoot of shoots) {

			this.#gui.canvasContext.fillStyle = shoot.color;

			this.#gui.canvasContext.moveTo(shoot.coordX, shoot.coordY);
			this.#gui.canvasContext.fillRect(shoot.coordX, shoot.coordY, 10, 10);
		}		
	}
	
	drawFoes(foes) {

		for (const foe of foes) {

			if (foe.isActive) {

				this.#gui.canvasContext.fillStyle = foe.color;
				//this.#gui.canvasContext.beginPath();
				this.#gui.canvasContext.moveTo(foe.coordX, foe.coordY);
				this.#gui.canvasContext.lineTo(foe.coordX - foe.size, foe.coordY - foe.size);
				this.#gui.canvasContext.lineTo(foe.coordX + foe.size, foe.coordY - foe.size);
				this.#gui.canvasContext.lineTo(foe.coordX, foe.coordY);
				//this.#gui.canvasContext.closePath();
			}
		}
		this.#gui.canvasContext.stroke();	
	}

	drawText(text, x, y) {

		this.#gui.canvasContext.font = "48px serif";
		this.#gui.canvasContext.fillStyle = 'aliceblue';
		this.#gui.canvasContext.fillText(text, x, y);
	}

	getDrawingArea() {

		return this.#gui.sideralBox;
	}
}