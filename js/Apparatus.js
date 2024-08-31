class Apparatus {
    
    constructor() {/* ... */ }

    startMachinery(state, difficulty, screenWidth) {

        if (difficulty === 'easy') {

            let index = 0;
            setInterval(() => {

                state.foes.push(new Foe(index, Utils.getRandom(screenWidth), -1, 2, 'navajowhite', 30)); // More magic numbers to remove
                index += 1;
            }, 3000);
        }
    }

    startAttackEngine(state, difficulty) {

        if (difficulty === 'easy') {

            setInterval(() => {

                state.foes.forEach(foe => {
                
                    if (Utils.getRandom(10) < 5) { // Magic number, the probability of a foe shooting or not
    
                        state.foeShoots.push(new Bullet(foe.coordX, foe.coordY, 4, 'lime'));
                    }
                });
            }, 2000);
        }
    }

    manageMachinery(state) {

        setInterval(() => {

            // Removing three foes, consider removing the ones passing by the bottom y coordinate
            state.foes.shift();
            state.foes.shift();
            state.foes.shift();
        }, 20000);
    }
}