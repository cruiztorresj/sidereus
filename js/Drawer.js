class Drawer {
	
	#sideral;
	#context;

	constructor() {

		this.#sideral = document.getElementById('sideral');
		this.#context = this.#sideral.getContext('2d');
	}

	drawHero(hero){

		if (hero instanceof Melencolie) {

			this.#drawMelencolie(hero);
		}
	}

	#drawMelencolie(hero) {

		this.#context.beginPath();
		this.#context.strokeStyle = 'yellow';
		this.#context.arc (hero.coordX, hero.coordY, hero.radiusOne * 0.1, 0, 2 * Math.PI);
		this.#context.stroke();

		this.#context.beginPath();
		this.#context.strokeStyle = 'yellow';
		this.#context.arc (hero.coordX, hero.coordY, hero.radiusOne, 0, 2 * Math.PI);
		this.#context.stroke();

		this.#context.beginPath();
		this.#context.strokeStyle = 'aliceblue';
		this.#context.arc (hero.coordX, hero.coordY, hero.radiusTwo, 0, 2 * Math.PI);
		this.#context.stroke();

		this.#context.beginPath();
		this.#context.strokeStyle = 'tomato';
		this.#context.moveTo(hero.coordX, hero.coordY);

		this.#context.lineTo(hero.retrieveWeaponCoord(1, 'x'), hero.retrieveWeaponCoord(1, 'y'));

		console.log(`LINE TO COORDINATE: (${hero.retrieveWeaponCoord(1, 'x')}, ${hero.retrieveWeaponCoord(1, 'y')})`);
		this.#context.moveTo(hero.coordX, hero.coordY);
		this.#context.lineTo(hero.retrieveWeaponCoord(2, 'x'), hero.retrieveWeaponCoord(2, 'y'));
		
		this.#context.stroke();
	}
}