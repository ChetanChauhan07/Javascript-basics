//1. ENCAPSULATION : -The process of wrapping properties and functions within a single unit is known as encapsulation.

class bank{
    #balance = 0;    // # will allow to not access the balance outside the class

    depoite(amount){
        this.#balance += amount;
        return this.#balance;
    }
    getbalance(){
        return `$ ${this.#balance} is the balance `   // Method to return the unaccessable balance 
    }
}

let account = new bank();
console.log(account.getbalance());
