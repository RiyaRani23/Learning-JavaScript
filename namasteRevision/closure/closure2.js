// Important Code for Closure Concept in JavaScript
// This example demonstrates how closures work with asynchronous functions like setTimeout.
// The goal is to log numbers 1 to 5 with a delay, but using var causes all logs to show 6.

// Using var (Incorrect approach)

function x() {
    for(var i = 1; i <= 5; i++) {
        setTimeout(function (){
            console.log (i);
        }, i * 1000);
    }
    console.log("Namaste JavaScript");
}
x();
// Output:
// Namaste JavaScript
// 6
// 6
// 6
// 6
// 6
// Explanation:
// 1. The function `x` is defined and called.
// 2. Inside `x`, a `for` loop runs from 1 to 5, setting up five `setTimeout` calls.
// 3. Each `setTimeout` is scheduled to log the value of `i` after `i * 1000` milliseconds.
// 4. However, due to the use of `var`, `i` is function-scoped and retains its final value (6) when the timeouts execute.
// 5. As a result, after 1 to 5 seconds, each timeout logs the value 6.
// 6. The string "Namaste JavaScript" is logged immediately after setting up the timeouts, before any of them execute.

// To fix this issue and log the expected values (1 to 5), we can use an IIFE (Immediately Invoked Function Expression)
function xFixed() {
    for(var i = 1; i <= 5; i++) {
        (function (j) {
            setTimeout(function (){
                console.log (j);
            }, j * 1000);
        })(i);
    }   
    console.log("Namaste JavaScript");
}
xFixed();
// Output:
// Namaste JavaScript   
// 1
// 2
// 3
// 4
// 5
// Explanation of the fix:
// 1. An IIFE is used to create a new scope for each iteration of the loop.
// 2. The current value of `i` is passed as an argument `j` to the IIFE.
// 3. Inside the IIFE, `j` retains the value passed during that iteration, allowing each timeout to log the correct value (1 to 5) after the specified delay.

// Alternatively, we can use `let` instead of `var` to achieve block scoping:
function x() {
    for(let i = 1; i <= 5; i++) {
        setTimeout(function (){
            console.log (i);
        }, i * 1000);
    }
    console.log("Namaste JavaScript");
}
x();
// Output:
// Namaste JavaScript
// 1
// 2
// 3
// 4
// 5
// Explanation of the let solution:
// 1. By using `let` instead of `var`, `i` is block-scoped.
// 2. Each iteration of the loop creates a new binding for `i`, preserving its value for each timeout.
// 3. As a result, after 1 to 5 seconds, each timeout logs the correct value (1 to 5).
