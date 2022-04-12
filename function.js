//Function declaration

function adder (a, b){
    console.log(a + b);
}
adder(10,15)


//Local variables

function greet(){
    let userName = "Joni" 
    console.log("Hello " + userName)
}
greet();

//Global variables

let userName = "Joni"
function greet(){
    console.log("Hello " + userName)
}
greet();
console.log(userName)


//Parameters and it's evloution

function test(a = "Joni ", b = "Islam"){
    // if (typeof a === "undefined"){
    //     a = "Joni";
    // } if (typeof b === "undefined"){
    //     b = " Islam"
    // }
    console.log("Hello " + a + b);
}
test();


//Returning a value

function square(x) {
    return (x*x);
}
let squareNine = square(7);
console.log(squareNine);



// Immidiatley invokable function expressions iifes

(function(name){
    console.log(name)
})("Atik Faisal");