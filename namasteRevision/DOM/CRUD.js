const newElement = document.createElement("h2");
newElement.id = "second";
newElement.textContent = "This is a new heading added using JavaScript.";

// Select 
const element = document.getElementById("first");
element.after(newElement); // Insert after the selected element