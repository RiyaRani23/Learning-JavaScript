// hoisting in JavaScript is a behavior in which variable and function declarations are moved to the
//   top of their containing scope during the compilation phase before the code is executed.

//function declaration hoisting
console.log(greet()); // Output: "Hello, World!"
function greet() {
    return "Hello, World!";
}

// Arrow function hoisting
try {
    console.log(sayHi()); // Throws TypeError: sayHi is not a function
} catch (e) {
    console.log(e.toString());
}

var sayHi = () => {
    return "Hi there!";
};

// Variable hoisting with var
console.log(message); // Output: undefined
var message = "This is a hoisted variable.";
