/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    if(s.length === 0) {
        return false;
    }
    if (s[0] === "]" || s[0] === "}" || s[0] === ")"){
        return false;
    }


    for (let i=0; i<s.length; i++){
        if (stack[stack.length-1] === '('&& s[i] === ")"){
            stack.pop();
            console.log("Stack after popping '(': ", stack); // Log the stack after popping
        }
        else if (stack[stack.length-1] === "{" && s[i] === "}"){
            stack.pop();
            console.log("stack afer {: ", stack)
        }
        else if(stack[stack.length-1] === "[" && s[i] === "]"){
            stack.pop();
            console.log("stack after [: ", stack)
        } else {
            stack.push(s[i]);
        }
    }
    console.log("stack, ", stack)
    if (stack.length === 0){
        return true;
    } 
    return false;
}

const test1 = "()[]{}";
const test2 = "(]";
const test3 = "([)]";
const test4 = "{[]}";
const test5 = "";

console.log("Test 1: ", isValid(test1)); // true
console.log("Test 2: ", isValid(test2)); // false
console.log("Test 3: ", isValid(test3)); // false
console.log("Test 4: ", isValid(test4)); // true
console.log("Test 5: ", isValid(test5)); // false


    /*  
    MY NOTES
            ({[]]})

    i=0: ["("]
    i=1: ["(", "{"]
    i=2: ["(", "{", "["]
    i=3: ["(", "{" ]
    i=4: ["("]
    i=5: []

    LIFO

Remember that, according to the else block, you only push to the 
stack if none of the conditions in the if statements are satisfied. 
In the first three iterations, the opening brackets were pushed 
because they didn't satisfy the conditions in the if statements,
 which is why the else block executed.

    */

    /**
    given a string s containing just the characters (, ), {, },[, ], determine whether the input string is valid
    an input string is valid if,
    - open brackets are closed by the same type of brackets
    - open brackets must be closed in the correct order
    - every close bracket has a corresponding open bracket of the same type
    

    access the top of the stack with stack[stack.length - 1]) WITH LIFO

    push everything onto the stack. if the top is the same as the letter at the end, then
    pop the top and remove the bottom?
    (
        {
            [

            ]
        }
    )
     */

