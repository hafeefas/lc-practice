
//LINK: https://leetcode.com/problems/happy-number/

var isHappy = function(n) {

    let digit=0;
    let cycleDetectionSet = new Set();

    while(!cycleDetectionSet.has(n) && n>1){
    cycleDetectionSet.add(n);
    let sum = 0;

        while(n>0){
            digit = n%10;
                // console.log(digit, "digit")
            sum += Math.pow(digit, 2)
                // console.log(sum,"sum")
                // console.log(n, "n ->")
            n = Math.floor(n/10);
                // console.log(n)
        }
        n=sum;
    }
    
    if (n===1){
        return true;
    } else {
        return false;
    }
};

const test1= 19;
const test2= 2;
const test3 = 29;

console.log("Test 1: ", isHappy(test1)); //true
console.log("Test 2: ", isHappy(test2)); //false
console.log("Test 3: ", isHappy(test3)); //false




    /* starting with any positive integer, replace the number by the sum of the squares of its digits
    the sum, of the squares, of its digits
    for example if we have 19, seperate that by doing 1, 9. then, square the 1 and 9.
    that'll be 1^2 and 9^2. then we want the sum of it, so we add them.

    - Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a 
    cycle which does not include 1.
    3^2 + 2^2 = 13
    1^1 + 3^2 = 10
    1^2 + 0^2 = 1 --- happy :)
    */

        // digits.push(parseInt(n_string[i]))
        // [1, 9]
        // squared = digits.map(numberSquared = numberSquared * numberSquared);

// const num = 12345;

// const numString = num.toString();
// let squared = 0;

// let arrayOfDigits = [];

// for (let i=0; i<numString.length; i++){
//     arrayOfDigits.push(parseInt(numString[i]))
//     squared = arrayOfDigits.map(numberSquared => numberSquared * numberSquared);
// }
// console.log(squared)