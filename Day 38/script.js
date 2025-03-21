// call apply bind
// these are the 3 ways to call function assuming object as this
const obj = {name: "harsh"}

function abcd(){
    console.log(this,a,b,c);
}
abcd.call() //call function using .call
abcd.apply(obj,[1,2,3])
const laterexecution = abcd.bind(obj); //bind dont run function instantly
laterexecution();

//prototypal inheritance
function makeHuman(){
    this.name = "harsh";
    this.age =25;
}

const human1 = new makeHuman("Harsh",25);