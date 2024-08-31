class Melencolie {

	#radiusOne;
	#radiusTwo;
	#radiusTwoFactor;
	#coordX;
	#coordY;
	#gunEndpointOne;
	#gunEndpointTwo;
	#weapon;
	#radiusOneColor;
	#radiusTwoColor;
	#enemiesDown;
	
	constructor(weapon) {
		
		this.#radiusOne = 35;
		this.#radiusTwoFactor = 1.20;
		this.#radiusTwo = this.#radiusOne * this.#radiusTwoFactor;
		this.#radiusOneColor = 'yellow';
		this.#radiusTwoColor = 'aliceblue';
		this.#weapon = weapon;
		this.#enemiesDown = 10;
	}
	
	get enemiesDown() {
		
		return this.#enemiesDown;
	}

	set enemiesDown(value) {
		
		this.#enemiesDown = value;
	}
	
	get radiusOne() {

		return this.#radiusOne;
	}

	get radiusTwo() {

		return this.#radiusTwo;
	}

	get coordX() {

		return this.#coordX;
	}

	get coordY() {

		return this.#coordY;
	}

	get gunEndpointOne() {

		return this.#gunEndpointOne;
	}

	get gunEndpointTwo() {

		return this.#gunEndpointTwo;
	}

	set coordX(coordX) {

		this.#coordX = coordX
	}

	set coordY(coordY) {

		this.#coordY = coordY
	}

	get radiusOneColor() {

		return this.#radiusOneColor;
	}

	get radiusTwoColor() {

		return this.#radiusTwoColor;
	}

	get weapon() {

		return this.#weapon;
	}

	#getAngleRotation(coord, angle) {

		if (coord === 'x') {

			return Math.cos(angle);
		} else {

			return Math.sin(angle);
		}
	}

	#getSideCoordRotation(coord, side) {

		if (side === 1) {

			return this.#getAngleRotation(coord, this.#weapon.angleEndpointOne);
		} else {

			return this.#getAngleRotation(coord, this.#weapon.angleEndpointTwo);
		}
	}

	getWeaponCoord(side, coord) {

		let result;

		if (coord === 'x') {

			result = this.#coordX + this.#radiusTwo * this.#getSideCoordRotation(coord, side);
		} else {

			result = this.#coordY + this.#radiusTwo * this.#getSideCoordRotation(coord, side);
		}

		return result;
	}

	setInitialPosition(width, height) {

		this.#coordX = width / 2;
		this.#coordY = height - this.#radiusTwo;
	}

	// TODO: Consider having a number of available shots so the player can buy more shots.
}