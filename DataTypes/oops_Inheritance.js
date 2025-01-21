// Object-Oriented Programing : JavaScript is heavily object-oriented. 
// It follows a prototype-based model, but it also offers a class syntax to enable typical OOP paradigms.
/*
ENCAPSULATION, INHERITANCE, POLYMORPHISM, ABSTRACTION

1. ENCAPSULATION : -The process of wrapping properties and functions within a single unit is known as encapsulation. 

2.Abstraction: Abstraction means displaying only essential information and hiding the details.
 Data abstraction refers to providing only essential information about the data to the outside world, 
 hiding the background details or implementation. 

 3.Inheritance: It is a concept in which some properties and methods of an Object are being used by another Object. 
  Unlike most of the OOP languages where classes inherit classes, 
  JavaScript Objects inherit Objects i.e. certain features (property and methods) of one object can be reused by other Objects. 

4. Polymorphism: Polymorphism is one of the core concepts of object-oriented programming languages. 
 Polymorphism means the same function with different signatures is called many times. In real life, for example,
 a boy at the same time may be a student, a class monitor, etc. So a boy can perform different operations at the same time.
 Polymorphism can be achieved by method overriding and method overloading
*/

class vehicle{
    constructor(make,model){
        this.make=make;
        this.model=model;
    }
    start(){
        return `${this.make} is a ${this.model}`
    }
}

class car extends vehicle{
    drive(){
        return ` ${this.make} is an example of inhertiance`
    }
}

let myCar= new car("Alto", 2007);
console.log(myCar.drive());
console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.start());

