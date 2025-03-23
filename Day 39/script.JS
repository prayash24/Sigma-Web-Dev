// DOM = DOCUMENT OBJECT MODEL
// DOM is a type of HTML tag and it's fully controll in JS

//accessing elements

    //Step 1- selection - js has 3 types of selection
    // document.getElementById
    var abcd = document.querySelector('#abcd');
    // document.getElementsByClassName
    var classabcd = document.querySelector('.abcd');
    // document.getElementsByTagName
    var h3 = document.querySelector('h3');
    // document.querySelector - it selects everythings

    //select and save in a variable
    //var btn = document.querySelector('button');

//modifying elements
    //before changing anything the first things needs to be done is selecting 
    var btn = document.querySelector('button');
    // btn.textContent = "Starting...";

    //textContent & innerHTML
    var h1 = document.querySelector('h1');
    h1.textContent = "I am gonna change this"; // print i am gonna change this
    h1.textContent += "Harsh"; //print hey harsh - += works as keep the first value
    h1.innerHTML = '<i> hello </i>';
