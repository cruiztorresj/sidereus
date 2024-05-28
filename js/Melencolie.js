class Melencolie {

	#radiusOne;
	#radiusTwo;
	#radiusTwoFactor;
	#coordX;
	#coordY;
	#weapon;
	#radiusOneColor;
	#radiusTwoColor;

	constructor() {

		this.#radiusOne = 10;
		this.#radiusTwoFactor = 1.20;
		this.#radiusTwo = this.#radiusOne * this.#radiusTwoFactor;
		this.#coordX = 100;
		this.#coordY = 135;
		this.#radiusOneColor = 'yellow';
		this.#radiusTwoColor = 'aliceblue';
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

	get radiusOneColor () {

		return this.#radiusOneColor;
	}

	set radiusOneColor(color) {

		return this.#radiusOneColor = color;
	}

	get radiusTwoColor () {

		return this.#radiusTwoColor;
	}

	set radiusTwoColor(color) {

		return this.#radiusOneColor = color;
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