class Hamster {
    constructor(owner, name, price) {
        this.owner = owner;
        this.name = name;
        this.price = price;
    }
    wheelRun() {
        console.log('squeek squeek');
    }
    eatFood() {
        console.log('nibble nibble');
    }
    getPrice() {
        return this.price;
    }
}

const hammy = new Hamster('Katie', 'Hammy', 4);

console.log(hammy);

class Person {
    constructor(name){
        this.name = name;
        age = 0;
        height = 0;
        weight = 0;
        mood = 0;
        hamsters = 0;
        bankAccount = 0;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getWeight() {
        return this.weight;
    }
    greet() {
        console.log('Oh hai ' + this.name + ' !')
    }
    eat() {
        return this.weight++, 
    }
    exercise() {
        return this.weight--,
    }
    ageUp () {
        return (this.age++, this.weight++, this.height++, this.mood--, (bankAccount + 10))
    }
    buyHamster () {
        return (this.mood + 10)
    }
}

const timmyBoy = new Person {
    constructor(name){ 
    this.name = 'Timmy',
    age = 3,
    age = 0;
    height = 0;
    weight = 0;
    mood = 0;
    hamsters = 0;
    bankAccount = 0;
    }


}
////////////////////////////////
// const newPerson = {
//     getOne(number){ /*definition */
//       const num = 7
//           return number
//     },
//     num: 5
//   }
//   newPerson.getOne(8) /* Assignment */
//   const number /* the definition from line 2*/ =
//   /* this is the assignment from line 11*/ 8;