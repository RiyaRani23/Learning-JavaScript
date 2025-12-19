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