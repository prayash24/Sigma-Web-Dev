//functions - in js function is not same as other programming language
//in js you dont have to define function type
// es5 - 3 types of functions - function statements, function expressions, anonymous function
// es6 - fat arrow function
//       1- basic fat arrow
//       2- fat arrow with one parameter
//       3- fat arrow with implicit return
// in js functions are called first class functions
// in js function treat as value/variable

var a = 10;
var b = 20;
var sum;
function add(){
    sum = a+b;
    console.log(sum);
}
add(); //calling the function

//function statement
function abcd(){

}

//function expression
var abcd = function (){

}

//annonymous function
function(){

}

//fat arrow
()=>{}
var a = () => {} //basic fat arrow

//fat arrow with one parameter - you can remove the fat()
var g = ab =>{}

//fat arrow with implicit return
var abcd = () => "harsh"; //harsh will get returned

//return
function a(){
    return 12;
}

console.log(abcd());

var a = ()=>{
    return 11;
}
var b = a();
