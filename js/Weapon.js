class Weapon {

	#angleEndpointOne;
	#angleEndpointTwo;
	#color;
	#bulletSpeed;
	
	constructor() {
		
		this.#angleEndpointOne = -90;
		this.#angleEndpointTwo = -45;
		this.#bulletSpeed = 10;
		this.#color = 'tomato';
	}
	
	get bulletSpeed() {
		
		return this.#bulletSpeed;
	}
	
	set bulletSpeed(value) {
		
		this.#bulletSpeed = value;
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

	// TODO the weapon has bullets
}