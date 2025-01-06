// QUESTION: Apply a stack within an array

/*  stacks are in LIFO order (Last in, Last out) 
for example, imagine u have a stack of books. 
If you want to take a book you have to take the one at the top. 
If you add a book, you also put it at the top. 

in js, there's no built in stack class. But you can make one using an array.
- push() adds an item to the top of the stack
- pop() removes an item from the top of the stack
- peek() looks at the top of the stack without removing it
    for example, you can use array[array.length-1]
- length: checks if the stack is empty

coding:
1. make an array named stack
2. push all the array elements onto the stack
 - place it in by putting in the last element first and then the rest
3. use a for loop to add the elements backwards

for (let i = array.length-1; i>=0; i--){
^ this lets i's length equal to 5, up to the last element. then i
will go up to the 0th index/element. and then it'll go backwards until it reaches there with i--
*/

let array = [6, 10, 3, 4, 5]

let stack = []

for (let i = array.length - 1; i >= 0; i--) {
    stack.push(array[i]);
}

console.log(stack);

// or just simply do let stack = [...array].reverse();
