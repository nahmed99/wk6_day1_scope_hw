// Episode 8

const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
};
  
const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';

    const plotTwist = function(room) {
        if (scenario.room === room) {
            scenario.murderer = 'Colonel Mustard';
        }

        const unexpectedOutcome = function(murderer) {
            if (scenario.murderer === murderer) {
                scenario.weapon = 'Candle Stick';
            }
        }

        unexpectedOutcome('Colonel Mustard');
    }

    plotTwist('Dining Room');
}

const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// Prediction:
// The weapon is Candle Stick...a lot of changes took place before getting there - nearly had to get out the pen and paper for this one!!!