// Write a function named 'maketea' that takes one parameter, 'typeOfTea' and return a string like "Making green tea" 
//when called with "green tea". Store the result in a variable name 'teaOrder'
/*
function maketea(typeOfTea){
    return `Making ${typeOfTea}`;
}

let a=maketea("green Tea");
console.log(a);
*/
/*
function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for ${teaType}`;
    }

   return confirmOrder();
}
let a=orderTea("chai");
console.log(a);
*/

//ARROW Functions const name=()=>{};

/* Write an arrow function named calculateTotal that takes two parameters : price and quantity.
    The function should return the total cost by multiplying the price and quantity.
    Store the result in a variable named totalcost.
*/
/*
const calculateTotal=(price,quantity)=>{
    return price*quantity;
}
let totalcost=calculateTotal(40,10);
console.log(totalcost);

*/

/* Write a function named processTeaOrder that takes another function makeTea as a parameter and calls it with the argument "earl grey".
Return the result of calling makeTea.
*/
/*
function makeTea(tea){
    return `Chetan Chauhan ${tea}`;
};
function processTeaOrder(teaFunction){
    return teaFunction('earl grey');
};
let order=processTeaOrder(makeTea);
console.log(order);
*/

/* Write a function named createTeaMaker that returns another function. The returned function should take one parameter, teaType and
    return a message like Making green tea. 
    Store the returned function in a variable named teaMaker and call it with green tea.
*/

function createTeaMaker(){
    return function (teaName){
        return `Making ${teaName}`;
    };
}

let teaMaker=createTeaMaker();
let a=teaMaker("Chai");
console.log(a);

