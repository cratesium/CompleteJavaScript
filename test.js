// console.log("shikhar");
const name="shikhar";
let lname = "singh"
let age = 5;

console.log(name+" "+lname +"  age = > "+age);
console.table([name,lname,age]);


//var vs let 
//var
// Function Scope: Variables declared with var are scoped to the function in which they are declared, or globally if declared outside of a function. They do not have block-level scope.


function example() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10
}
example();
// Hoisting: Variables declared with var are hoisted to the top of their scope. This means that you can reference the variable before its declaration, but it will be undefined until the actual declaration is encountered.


console.log(a); // undefined
var a = 5;
// Re-declaration: You can re-declare a variable in the same scope without error.
var b = 1;
var b = 2; // No error














// Block Scope: Variables declared with let are block-scoped. This means they are only accessible within the block (enclosed by {}) in which they are declared.


// function example1() {
//   if (true) {
//     let y = 20;
//   }
//   console.log(y); // ReferenceError: y is not defined
// }
// example();
// No Hoisting: Varia bles declared with let are not hoisted in the same way as var. They are in a “temporal dead zone” from the start of the block until the declaration is encountered, so accessing them before the declaration results in a ReferenceError.


// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 10;
// No Re-declaration: You cannot re-declare a variable with the same name in the same scope.


// let c1 = 1;
// let c1 = 2; // SyntaxError: Identifier 'c' has already been declared


  
// Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This can lead to some surprising results if you're not familiar with it.

// How Hoisting Works
// Variables
// For variables declared with var, hoisting moves the declaration to the top of the function or global scope, but not the initialization. This means you can reference a variable before it's actually declared, but its value will be undefined until the declaration is reached.

// Example:

console.log("--------------------------------------------------------------------------------")
// console.log(x); // undefined
// var x = 5;
// console.log(x); // 5
// // In the above code, JavaScript interprets it as:


var x;
console.log(x); // undefined
x = 5;
console.log(x); // 5



