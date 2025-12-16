// Closure is a feature in JavaScript where an inner function has access to the outer 
// (enclosing) function's variables even after the outer function has executed.

function x() {
    var a = 10;
    function y() {
        console.log(a);
    }
    
    y();
    a = 100;
}
x();// Output: 100 -> reason: Closure captures variable by reference, not by value.

// Explanation:
// 1. The function `x` is defined and called.
// 2. Inside `x`, a variable `a` is initialized to 10.
// 3. The nested function `y` is defined, which logs the value of `a`.
// 4. Before calling `y`, the value of `a` is changed to 100.
// 5. When `y` is called, it accesses the current value of `a`, which is now 100, due to closure behavior in JavaScript.