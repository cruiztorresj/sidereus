class Weapon {

	#angleEndpointOne;
	#angleEndpointTwo;
	
	constructor() {

		this.#angleEndpointOne = -90;
		this.#angleEndpointTwo = -45;
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
}