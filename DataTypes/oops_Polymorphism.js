/*4.Polymorphism: Polymorphism is one of the core concepts of object-oriented programming languages. 
 Polymorphism means the same function with different signatures is called many times. In real life, for example,
 a boy at the same time may be a student, a class monitor, etc. So a boy can perform different operations at the same time.
 Polymorphism can be achieved by method overriding and method overloading.
 */
class bird{
    fly(){
        return `Birds can fly`;
    }
}
class penguin extends bird{
    fly(){
        return`Penguin can't fly`;
    }
}

let birds = new bird();
let penguins = new penguin();

console.log(birds.fly());
console.log(penguins.fly());


// Static Methods  : These are the methods which can not be used by accessing through creating objects.

class calculator{
    static add(a,b){
        return a+b;

    }

}

let a = new calculator();
//console.log(a.add(2,3));

console.log(calculator.add(2,3));  // we can access this method by consoling the class.


// Getters and Setters

class emp{
    constructor(name,sal){
        this.name = name;
        this._sal = sal;
    }
    get sal(){
        return "Yor are not allowed to see salary";
    }
    set sal(value){
        if(sal<0){
            console.log("invalid salary");
            
        }
        else{
            this._sal=value;
        }

    }

}
let b=new emp("chetan", -50000);
console.log(b._sal);

