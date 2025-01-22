// 2.Abstraction: Abstraction means displaying only essential information and hiding the details.
//  Data abstraction refers to providing only essential information about the data to the outside world, 
//  hiding the background details or implementation. 

class machine{
    start(){
        // Preeing any button for starting any process

        return "Starting the machine";
    }
    brewcoffee(){
        return "Brewing coffee";
    }
    pressStart(){
        let one =this.start();
        let two = this.brewcoffee();
        return `${one} and ${two}`;
    }
}

let mymachine = new machine();
console.log(mymachine.start());
console.log(mymachine.brewcoffee());
console.log(mymachine.pressStart());



