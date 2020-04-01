///////////////////////////////////
// Palindrome
///////////////////////////////////
// checkPalindrome = (string) => {
//     let strLength = Math.ceil(string.length/2);
//     string = string.toLocaleLowerCase();

//     for (let i = 0; i< strLength; i++) {
//         if (string[i] !== string[strLength - i - 1]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(checkPalindrome("racecar"));

//////////////////////////////////////////////
// Sum Array
//////////////////////////////////////////////
// var sumArray = [9, 12, 17, 15, 45];
// var sum = 0;

// for (var i = 0; i < sumArray.length; i++) {
//     sum += sumArray[i]
// }
// console.log(sum);

//////////////////////////////////////////////
// Prime Numbers
//////////////////////////////////////////////
function checkPrime(num) {
    if (num === 2) {
        return true;
    }
    else if (num > 1) {
        for (var i = 2; i < num; i++) {
            if (num % i !== 0) {
                return true;
            }
            else if (num === i * i) {
                return false;
            }
        } 
        return false;
    }
    return false;
}
console.log(checkPrime());

function printPrimes(checkPrime) {
if (i = 2, i <= 100, i++) {
     let checkPrime(i); console.log(i);
    }
}
    