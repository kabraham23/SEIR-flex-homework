class Hero {
    constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = {
        sprinkleSpray: 5,
        sugarShock: 10
    }
    // this.catchPhrase = {
    //     return (
    //         ['i\'m fresher than day old pizza', 
    //     'you can\'t count my calories']
    //     )
    // }
    // this keeps breaking my code. Can't figure out why...
}
    talkSass() {
        // picks one of catch phrases randomly
    }
    announceHealth() {
        console.log(this.health);
    }
    fight() {
        console.log('im ready to rumble');
    }
}

const dDonut = new Hero('Dougie');


class Enemy {
    constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = {
        pepperoniStars: 5,
        cheeseGrease: 10    
    }
    // this.catchPhrase = {
    //     ['i\'m youtube famous', 
    //     'i\'m more dangerous than an uncovered sewer']
    // }
    // same with this. Breaking my code.
}
    talkSmack() {
        // random catchphrase
    }
    announceHealth() {
        console.log(this.health);
    }
    fight() {
        console.log('i\'m gonna flatten you like a slice of pepperoni!')
    }
}

const pRat = new Enemy('Pizza Rat');

dDonut.talkSass();
pRat.talkSmack();
dDonut.announceHealth();
pRat.announceHealth();