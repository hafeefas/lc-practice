/*
given an array of integers, return the indices of two numbers,
return the indicies of the two numbers that add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

USING A MAP.
map with js -> key value pair

make a map let map = {}
add the array elements to the map with a for loop
make an if statement. 
if the two numbers in the array add up to the target element, then return that key value pair of the map. the elements.

IDEA: subtracting the target - element will ; if u get zero when doing it, it means the two elements add up to the target
*/
let nums = [2, 7, 11, 15]
let target = 9

let map = {};

for (let i = 0; i < nums.length; i++) {
    let storeDifference = target - nums[i];
    //eg 9-11 = 2   9-7 = 2 so the answer is 7 and 2

    //if the answer of the storeDifference is inside of the array, add it to the map
    if (map[storeDifference] !== undefined) {
        console.log([map[storeDifference], i])
        return [map[storeDifference], i];
    }
    map[nums[i]] = i;
}