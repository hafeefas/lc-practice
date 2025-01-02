/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 1){
        return nums[0];
    }

    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i=0; i<nums.length; i++){
            currentSum = Math.max(nums[i], currentSum+nums[i])
            maxSum= Math.max(maxSum, currentSum);
        }
    return maxSum;
    //excalidraw: https://excalidraw.com/

    /*
    maximum subarray is when u take multiple subarrays from the original and check if that subarray
    has the largest sum compared to the other subarrays
    - if the original array has the biggest sum, then u can keep that array
    - i am given the array and nothing else

    [-2,1,-3,4,-1,2,1,-5,4]
    [-2,1,-3,4] | [-1,2,1,-5,4]
      i i  i i      i i i i i = 0 |  1           
add up all numbers from left side | add up from right
check what side is larger
- but also we can keep on splitting the array, even if we have already split it. and then check if that sub
array is larger
     [-1,2,1,-5,4]
     [-1,2,1] [-5,4]
         2       -1

        BASE CASE: if the length is 1, immediately return the number inside the array
        initilize a tracker that reads through the subarrays and counts the sum
        - split the array
        - go through both arrays and check which is larger

     */

    // if(nums.length === 1){
    //     return nums[0];
    // }

    //  let firstHalfSum = 0;
    //  let secondHalfSum = 0;
    //  let finalSum=0;

    // let halfIndex = Math.ceil(nums.length / 2) //O(1)
    //  let firstHalf = nums.slice(0, halfIndex) // O(n)
    //  let secondHalf = nums.slice(halfIndex) //O(n)

    //  for (let i=0; i< firstHalf.length; i++){
    //     firstHalfSum += firstHalf[i]
    //     for (let j=0; j<secondHalf.length; j++){
    //         secondHalfSum+= secondHalf[j]
    //         if (firstHalfSum > secondHalfSum)
    //             return firstHalfSum;
    //     }
    //             return secondHalfSum;
    //  }
    //  return;

};