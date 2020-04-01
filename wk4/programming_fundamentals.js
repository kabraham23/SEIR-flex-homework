// DRY
// Don't Repeat Yourself. Keep your code as short as you can.

// KISS
// Keep It Simple Stupid! Simplicity is the goal!

// Avoid creating a YAGNI
// You aren't going to need it. 

// Do the simplest thing that could possibly work
// Helps keep your code on the simplest path

// Don't make me think
// Code should be easily understood with minimal effort

// Write code for the maintainer
//  “Always code as if the person who ends up maintaining your code is a violent psychopath who knows where you live.”

// Single responsibility principle
// a component should perform one well defined task and no more.

// Avoid premature optimization
// Only think about optimization when your code is already working at 97% speed.

// Separation of concerns
// Each problem in code should be dealt with seperately and with minimally overlapping code

// None of these suprise me, but I don't know that I fully understand avoiding optimization.


///////////////////////////////
// Commenting code
///////////////////////////////

// const f = l => { 
// // calling a function with one parameter
//     let es = 0, p = 0, c = 1, n = 0
//     // giving a list of objects (numbers)
//     while (c <= l) {
//     // while loop - while c is less than or equal to l
//       n = c + p;
//       // n is equal to c plus p
//       [c, p] = [n, c]
//       // array equals array
//       es += (c % 2 === 0) ? c : 0
//       // and es is divisible by 2 or c is 0
//     }
//     return es
//     //return the variable es
//   }
  
//   console.log(f(55))


///////////////////////////////////

// const f2 = (limit) => {
//     let evenSum = 0;
//     let previous = 0;
//     let current = 1;
//     while (current <= limit) {
//       let next = current + previous;
//       previous = current;
//       current = next;
//       if (current % 2 === 0) {
//         evenSum += current;
//       }
//     }
//     return evenSum;
//   }
  
  
//   console.log(f2(55))

  ////////////////////////////
  // This is finding even number is the Fibonacci sequence, so a better function 
  // name for this could be evenFibonacci or evenFib.
  // The semicolon is necessary to seperate the two functionalities