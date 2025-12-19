const newElement = document.createElement("h2");
newElement.id = "second";
newElement.textContent = "This is a new heading added using JavaScript.";

// Select 
const element = document.getElementById("first");
element.after(newElement); // Insert after the selected element
// element.before(newElement); // Insert before the selected element

const newElement2 = document.createElement('h3');
newElement2.textContent = "This is another heading added using JavaScript.";
newElement.id = 'third';
// newElement.className = 'heading2';
// newElement.className += ' heading3';// Add another class

newElement2.classList.add('heading2'); // Add multiple classes
newElement2.classList.add('heading3'); 

element.before(newElement2);

// Create and append list items

const list = document.createElement('li');
list.textContent = "Mango";
const list2 = document.createElement('li');
list2.textContent = "Apple";
const list3 = document.createElement('li');
list3.textContent = "Orange";
const list4 = document.createElement('li');
list4.textContent = "Grapes";

const ulElement = document.getElementById("listing");
ulElement.append(list);
ulElement.append(list2);
ulElement.prepend(list3); 

// list2.before(list4); // Insert before list2
ulElement.children[1].after(list4); // Insert after list2

const arr = ["Banana", "Pineapple", "Strawberry"];

const unorderElement = document.getElementById("listing");

for(let fruit of arr){
    const newlist = document.createElement('li');
    newlist.textContent = fruit;
    unorderElement.append(newlist);
}