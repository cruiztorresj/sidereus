class Level {

	#hero;
	#difficulty;
	#foeSpeed;
	#boss;
	
	constructor(hero, difficulty, boss){
		
		this.#hero = hero;
		this.#difficulty = difficulty;
		this.#boss = boss;
		
		// TODO moving this outside
		if (this.#difficulty === 'easy') {
			
			this.#foeSpeed = 2;
		}
	}
	
	get boss() {
		
		return this.#boss;
	}

	get hero() {

		return this.#hero;
	}

	get difficulty() {

		return this.#difficulty;
	}

	get foeSpeed() {

		return this.#foeSpeed;
	}
}