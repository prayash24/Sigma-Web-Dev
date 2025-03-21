// this - is a keyword in js and suspenseful
// the value of this keyword changes according to conditions - to understand the values of this we needs to understand different conditions

//total this scenarios
//global scope - value of this = window
console.log(this);

//function - window
function abcd(){
    console.log(this);
}
abcd();

//method - object
var obj = {
    name: function(){
        console.log(this);
    },
    age: 25,
    email: "nasji"
}
obj.name();

//function inside method (es5) - window
var obj2 = {
    sayName: function(){
        function child(){
            console.log(this);
        }
        child();
    }
}
obj2.sayName();

//function inside method (es6) - object
var obj3 = {
    sayName: function(){
        const child = ()=>{
            console.log(this);
        }
        child();
    }
}

//constructor function - new blank object
function add(){
    console.log(this);
}
add();
const ans = new add(); //new create a blank object

// event listner -that element where event list is applied
document.querySelector("button")
.addEventListener("click", function(){
    console.log(this);
})