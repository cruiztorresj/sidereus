class Weapon {

	#angleEndpointOne;
	#angleEndpointTwo;
	#color;
	
	constructor() {

		this.#angleEndpointOne = -90;
		this.#angleEndpointTwo = -45;
		this.#color = 'tomato';
	}

	get angleEndpointOne() {

		return this.#angleEndpointOne;
	}

	set angleEndpointOne(angle) {

		this.#angleEndpointOne = angle;
	}

	get angleEndpointTwo() {

		return this.#angleEndpointTwo;
	}

	set angleEndpointTwo(angle) {

		this.#angleEndpointTwo = angle;
	}

	get color() {

		return this.#color;
	}

	set color(color) {

		this.#color = color;
	}
}