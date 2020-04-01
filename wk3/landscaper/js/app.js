// spend five days ($1/day) cutting lawns with your teeth
// as soon as you have $5, buy a freaking pair of rusty scissors
// cut lawns for another 5 days ($5 a day) until you have $25
// when you have $25, buy an old-timey push mower
// cut lawns for another 5 days ($50/day) until you have $250
// when you have $250, buy a batter-powered lawnmower
// cut lawns for another 5 days ($100/day) until you have earned enough to hire staff
// cut lawns with staff for 4 days ($250/day) until you have a staff and $1000
// You win the game!!!


// const landScaper = {
// 	tool : "teeth",
//   wallet : 0
// } 
// const increaseWallet = (worker) => {
// 		if(worker.tool === "teeth") {
// 		worker.wallet = worker.wallet + 1
//     return worker.wallet
// 	} 
//  if(worker.tool === "scissors") {
// 		worker.wallet = worker.wallet + 5
//     return worker.wallet
// 	}
// }
// const purchase = (worker, newTool) => {
// 			worker.tool = newTool
// }
// const runGame = () => {
// }
// increaseWallet(landScaper)
// increaseWallet(landScaper)
// increaseWallet(landScaper)
// purchase(landScaper, "scissors")
// increaseWallet(landScaper)
// increaseWallet(landScaper)
// landScaper

///////////////////////////////

const runGame = () => {
    alert ("Hey neighbor! Looks like you're a little short on cash!");
alert ("Tell you what. You can trim my lawn. But if you're going to do it with your teeth, I'll give you $1 a day");
var startGame = prompt ("Sound good?");
    if (startGame === "yes") {
        alert ("Great! Let's go!") 
    } if (startGame === "no") {
        alert ("Well, alright then. Bye.")
    };



const landscaper = {
    tool: "teeth",
    wallet: 0
}
alert ("Press ok when you're ready to work!")
alert ("You are working with your " + tool + " and you have " + wallet + " dollars.")
}
const increaseWallet = (landscaper) => {
	if(landscaper.tool === "teeth") {
    	landscaper.wallet = landscaper.wallet + 1
        return landscaper.wallet
        } 
        
    if(landscaper.tool === "scissors") {
    		landscaper.wallet = landscaper.wallet + 5
        return landscaper.wallet
        }
    if(landscaper.tool === "push mower") {
    		landscaper.wallet = landscaper.wallet + 50
        return landscaper.wallet
        }
    if(landscaper.tool === "battery mower") {
    		landscaper.wallet = landscaper.wallet + 100
        return landscaper.wallet
        }
    if(landscaper.tool === "hungry students") {
    		landscaper.wallet = landscaper.wallet + 250
        return landscaper.wallet
    	}
    } 
 
alert ("Ready to start? Press ok!");

// this is where I got super lost. I tried to do my best, but I couldn't get the code running again, and I lost track of where to go.
let landscaper 

increaseWallet(landscaper);
landscaper.wallet ++
    landscaper.wallet = landscaper.wallet + (workDay);
   
    if (landscaper.wallet = (i < 5)) return alert ("You have " + landscaper.wallet + " dollars");
    else if (landscaper.wallet = (i = 5)) return alert ("You're ready for a new tool!")


var purchaseScissors = prompt ("Would you like to buy some rusty scissors?");
    if (purchaseScissors === "yes") {
        alert ("Excellent choice.") 
    } if (purchaseScissors === "no") {
        alert ("Up to you I guess...")
    };

const purchase = (worker, newTool) => {
    worker.tool = newTool
    }
    


}




console.log();
