class Level {

	#hero;
	#difficulty;

	constructor(hero, difficulty){

		this.#hero = hero;
		this.#difficulty = difficulty;
	}

	get hero() {

		return this.#hero;
	}

	get difficulty() {

		return this.#difficulty;
	}
}