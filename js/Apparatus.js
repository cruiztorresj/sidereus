class Apparatus {
    
    constructor() {
        
    }

    startMachinery(state, difficulty) {

        if (difficulty === 'easy') {

            let index = 0;
            setInterval(() => {

                state.foes.push(new Foe(index, Utils.getRandom(200), -Utils.getRandom(2), 2, 'navajowhite', 30));
                index += 1;
            }, 3000);
        }
    }
}