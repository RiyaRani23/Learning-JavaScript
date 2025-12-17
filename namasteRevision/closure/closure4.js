function Counter() {
  let count = 0;
  this.incrementCounter = function (){
    count++;
    console.log(count);
  }
  this.decrementCounter = function (){
    count--;
    console.log(count);
  }
}
var counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();

var counter2 = new Counter();
counter2.incrementCounter();
counter2.decrementCounter();

// Explanation:
// 1. The `Counter` function acts as a constructor for creating counter objects.
// 2. Inside `Counter`, a private variable `count` is initialized to 0.
// 3. Two methods, `incrementCounter` and `decrementCounter`, are defined to modify and log the value of `count`.
// 4. When `counter1` is created, it has its own separate `count` variable. Calling its methods updates and logs its own count.
// 5. Similarly, `counter2` has its own separate `count` variable, independent of `counter1`.