function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found at index 'mid'
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    //keep going thru the while loop until u find ur target
    return -1; // Target not found
}

const array = [1, 2, 3, 4, 6];
let target = 6;

console.log(binarySearch(array, target)); // Output: 4
