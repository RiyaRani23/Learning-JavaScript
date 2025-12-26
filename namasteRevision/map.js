const arr = [5,1,4,6,3];

const double = function (x){
    return x * 2;
}

const output = arr.map(double); 
console.log(output); // [10, 2, 8, 12, 6]
// The `map` method creates a new array by applying the `double` function to each element of `arr`.

//OR 
const output2 = arr.map(function double2(x){
    return x * 2;
});
console.log(output2); // [10, 2, 8, 12, 6]

//OR using anonymous function
const output4 = arr.map((x) => {
    return x * 2;
});
console.log(output4); // [10, 2, 8, 12, 6]

//OR using arrow function
const output3 = arr.map( x => x * 2 );
console.log(output3); // [10, 2, 8, 12, 6]
