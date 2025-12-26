// Callback function - function passed as an argument to another function
function x(){
    console.log("Namaste")
}

// Higher order function - Function that takes another function as an argument
function y (x) {
    x();
}

// Finding area and circumference of circle

 const radius = [3,1,2,4];

function calculateArea (radius){
    const output = [];
    for (let i=0; i<radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
};

function calculateCircumference (radius){
    const output = [];
    for (let i=0; i<radius.length; i++){
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
};
console.log(calculateArea(radius));
console.log(calculateCircumference(radius));

// OR using higher order function because above code is repeating

const area = function(radius){
    return Math.PI * radius * radius;
};

const circumference = function(radius){
    return Math.PI * 2 * radius;
}
const calculate2 = function (radius, logic){
    const output = [];
        for(let i = 0; i<radius.length; i++){
            output.push(logic(radius[i]));
        }
    return output;
}

console.log(calculate2(radius, area));
console.log(calculate2(radius, circumference));

// also use map function of array to do the same thing
const calculate3 = function (radius, logic){
    return radius.map(logic);
}
console.log(calculate3(radius, area));
console.log(calculate3(radius, circumference));

/* Things learned:
1. Follow DRY(Don't Repeat Yourself) principle while coding.
2. Use function to stop writing repeating line of codes.
3. Function that takes another function as argument(callback function) is known as Higher order functions.
4. It is this ability that function can be stored, passed and returned,  they are called first class citizens.
5. If we use Array.property.function-name. This function is accessible to any array in your code. */