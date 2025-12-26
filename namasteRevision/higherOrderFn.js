// Callback function - function passed as an argument to another function
function x(){
    console.log("Namaste")
}

// Higher order function - Function that takes another function as an argument
function y (x) {
    x();
}