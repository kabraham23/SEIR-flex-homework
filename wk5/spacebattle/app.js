// actors
// me - captain -- USS Schwarzenegger --- destroy every alien ship

// them - six alien ships -- only attack one at a time - fight one ship at a time

// actions
// player gets first move
// when alien ship is destroyed, player has option to retreat
// retreat means game is over
// player only wins if you beat all the aliens
// if aliens destroy player, you lose

// ship properties
// hull = hitpoints
// firepower = amount of damage done with successful hit
// accuracy = chance of successful hit - 0-1
// use Math.random() for accuracy



const ussSchwarz = {
    hull: 20,
    firepower: 5,
    accuracy: .7
};


const alienHull = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
};

const alienFire = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
};

const alienAccuracy = (min, max) => {
    let num = (Math.random() * (max - min)) + min;
    return Math.round(num * 10) / 10
};


class alienShip {
    constructor(alienHull, alienFire, alienAccuracy){
        this.hull = alienHull(3, 6);
        this.firepower = alienFire(2,4);
        this.accuracy = alienAccuracy(.6,.8)
        }
    };

class aShips extends alienShip {
     constructor(alienHull, alienFire, alienAccuracy) {
    this.hull = alienHull,
    this.firepower = alienFire,
    this.accuracy = alienAccuracy
     }
 };

 const aliens = new alienShip();

// console.log(aliens);
// console.log(alienHull);
// console.log(alienFire);
// console.log(alienAccuracy);



alert ('Welcome to Space Battle!');
alert ('You have gone through a wormhole and found yourself on the edge of a new dimension.');
alert ('This dimension has never seen another being, and you have taken them by surprise!');
alert ('They are a polite society that believes in taking turns, so they will only attack with one ship at a time.')
alert ('They are, however, well armed.');
alert ('You will attack first, and then they will attack.');
alert ('If you defeat their ship, either they will send a new one, or you may retreat.');
alert ('You win when you have defeated all of their ships.');
alert ('Ready to play?');
alert ('Good luck!');

// Start Game
// for loop for game times 6
// User attacks first
// if 


// Computer attacks second

const schwarz = () => {
    const yourAnswer = prompt(`Type 1 for fight, Type 2 for retreat.`, `1 or 2`);
        if (yourAnswer === '1') {
        //     if (accuracy <= .7 && alienHull <= firepower) {
            if (this.accuracy <= this.alienAccuracy(0,1) && alienHull <= firepower) {
                alert ('Another one bites the dust')
            };
            else (this.accuracy > this.alienAccuracy(0,1) && alienHull > firepower) {
                alert ('Ouch. Their turn. Brace yourself.')
            }

        };
        else (yourAnswer === '2') {
            alert ('You lose. Coward.')
        }
    };
schwarz();

const alienTurn = () => {
    if (this.alienAccuracy(0,1) > this.accuracy && alienFire > hull) {
        alert ('They sunk your battleship.')
    };
    else (this.alienAccuracy(0,1) <= this.accuracy && alienFire <= hull) {
        alert ('You live to die another day.')
    }
};

const game = (ussSchwarz, alienShip) => {
    ussSchwarz.attack(alienShip[0])
    if(alienShip[0].hull > 0){
        alienShip[0].attack(ussSchwarz)
    }
}
game();