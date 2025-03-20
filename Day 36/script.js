// undefined is a value
// this is assigned to variable only when variable has no value - this is a type of garbage value - or default value
// not defined is an error
// when pearticular element/identity is used without being declared given an error, and that error is not defined error
// null is a value
// this is a value which resolve like, not found
// null is received when something is not found

//arrays
//when one or more than one value needs to be store all together - array is used
var users = ["prayash", "kanha", "manas"];
users[1]; //kanha

//loop an array
users.forEach(function(val){
    console.log(val);
});

//objects - it is a technique to keep a similar type datails together
var obj = {
    name: "harsh",
    age: 25,
    email: "xyz@gmail.com",
    contact: 8478867556
};

obj.name()

var obj2 = new Object();

//synchronous js - code run line by line
//synchronous code run in main stack

//asynchronous js - all code run at a time and the first one to get executed display its result
//asynchronous code run in side stack
