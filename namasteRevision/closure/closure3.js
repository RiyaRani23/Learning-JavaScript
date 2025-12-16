function outer(){
    var a = 10;
    function inner(){
        console.log(a);
    }
    return inner;
}
// outer()();
// two parenthesis are used to first call outer function which returns inner function
// and then second parenthesis is used to call the returned inner function

let closer = outer();
closer();
 // Alternative way to call inner function instead of outer()() 
 

