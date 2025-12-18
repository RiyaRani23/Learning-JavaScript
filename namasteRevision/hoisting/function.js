var x = 1;
a();
b();
console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}

// Output:
// 10
// 100
// 1
// Explanation:
// 1. The global variable `x` is initialized to 1.
// 2. When function `a` is called, it has its own local variable `x` initialized to 10, which is logged.
// 3. When function `b` is called, it has its own local variable `x` initialized to 100, which is logged.
// 4. Finally, the global variable `x` is logged, which remains 1.
