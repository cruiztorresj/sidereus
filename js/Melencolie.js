class Melencolie {

	#radiusOne;
	#radiusTwo;
	#radiusTwoFactor;
	#coordX;
	#coordY;
	#weapon;

	constructor() {

		this.#radiusOne = 10;
		this.#radiusTwoFactor = 1.20;
		this.#radiusTwo = this.#radiusOne * this.#radiusTwoFactor;
		this.#coordX = 150;
		this.#coordY = 135;
		this.#weapon = new Weapon();
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

	set coordX(coordX) {

		this.#coordX = coordX
	}

	set coordY(coordY) {

		this.#coordY = coordY
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
		//debugger;
		if (side === 1) {

			return this.#getAngleRotation(coord, this.#weapon.angleEndpointOne);
		} else {

			return this.#getAngleRotation(coord, this.#weapon.angleEndpointTwo);
		}
	}

	retrieveWeaponCoord(side, coord) {

		let result;

		if (coord === 'x') {

			result = this.#coordX + this.#radiusTwo * this.#getSideCoordRotation(coord, side);
		} else {

			result = this.#coordY + this.#radiusTwo * this.#getSideCoordRotation(coord, side);
		}

		return result;	
	}
}