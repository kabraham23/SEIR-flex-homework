////////////////////////////////
// Easy Going
////////////////////////////////
// let i = 1; 
//     for (i = 1; i <= 20; i++) {
//         console.log(i);
//     }

////////////////////////////////
// Get Even
////////////////////////////////


////////////////////////////////
// Fizz Buzz
////////////////////////////////
// let i = 1; 
//     for (i = 1; i <= 100; i++) {
//         if (i % 15 === 0) console.log("FizzBuzz");
//         else if (i % 3 === 0) console.log("fizz");
//         else if (i % 5 === 0) console.log("buzz");
//         else console.log(i);
//     }

////////////////////////////////
// Wild Wild Life
////////////////////////////////
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// // Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// plantee[2] = 5001;
// console.log(plantee);

// // Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// wolfy[3] = "Gotham City";
// console.log(wolfy);

// // Give D'Art a second hometown by adding "Hawkins"
// dart.push ("Hawkins");
// console.log(dart);

// // Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
// wolfy[0] = "Gameboy";
// console.log(wolfy);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
// const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
//     for (let yellTurtles of turtles) {
//     console.log(yellTurtles.toUpperCase());
//     }

////////////////////////////////
// Methods, Revisited
////////////////////////////////
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 
// 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 
// 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// var a = favMovies.indexOf("Titanic");
// console.log(a);

// favMovies.push("Guardians of The Galaxy");
// console.log(favMovies);

// favMovies.reverse();
// console.log(favMovies);

// favMovies.shift();
// console.log(favMovies);

// favMovies.unshift();
// console.log(favMovies);

// var a = favMovies.indexOf("Django Unchained");
// console.log(a);
// !!Avatar isn't in this array!!


////////////////////////////////
// Where is Waldo
////////////////////////////////
// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",["Lucinda", "Jacc", "Neff", "Snoop"],["Petunia", ["Baked Goods", "Waldo"]]];
//     whereIsWaldo.splice(1,1);
//     console.log(whereIsWaldo);

//     whereIsWaldo[1][2] = "No One";
//     console.log(whereIsWaldo);

//     whereIsWaldo.indexOf("Waldo");
//     console.log(whereIsWaldo[3, 1]);


////////////////////////////////
//  Excited Kitten
////////////////////////////////
// let num = 1;
//     let catSays (num === %2); {
//         catSays = ["human...why you taking pitures of me", "the catnip made me do it", "why does the red dot always get away"];
//         let random = Math.floor(Math.random() * Math.floor(3));
//         console.log(random);
//     }
//     if (random < .2) {
//         console.log("human...why you taking pictures of me");
//     } else if (random < .4) {
//         console.log("the catnip made me do it";)
//     }
//     else (random < .6) {
//         console.log("why does the red dot always get away");
//     }
// }
// console.log(catSays());

////////////////////////////////
//  Find the Median
////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
    nums.sort();
    console.log(nums);
    let median = Math.ceil(nums.length/2);
    console.log(median);
    median = nums[13];
    console.log(median);
// Expected output:
// => 15