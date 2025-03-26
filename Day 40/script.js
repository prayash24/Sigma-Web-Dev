// var h1 = document.querySelector("h1");
// h1.style.color = "red";
// h1.style.fontFamily = "gilroy";
// h1.style.fontSize = "16px";

//classlist
var h1 = document.querySelector("h1");
h1.classList.add('makeitred');
// h1.classList.remove("makeitred");

//creating and deleting elements
var h1 = document.createElement('h1');
h1.textContent = "hey";
h1.classList.add("makeitred");