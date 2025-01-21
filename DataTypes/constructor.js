// Constructor function :- The Function() constructor creates Function objects. Calling the constructor directly can create functions dynamically
// , but suffers from security and similar (but far less significant) performance issues as eval(). 
// However, unlike eval (which may have access to the local scope), the Function constructor creates 
// functions which execute in the global scope only.


function person(name,age){
    this.name = name
    this.age = age  //this :- It refers to the newly created function
}
function car(make,model){
    this.make = make
    this.model = model
}

let myCar = new car("Toyota","Alto");
console.log(myCar);

function tea(type){
    this.type = type
    this.describe = function(){
        return `This is a type of ${this.type}`;
    }
}

let a=new tea("Lemon Tea");
console.log(a.describe());

function animal(spices){
    this.spices=spices;
}

animal.prototype.sound = function(){
    return `${this.spices} makes a sound`
}

let dog=new animal("Dog");
console.log(dog.sound());
