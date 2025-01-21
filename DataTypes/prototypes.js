/*let computer = {cpu : 12}
let lenovo = {screen : "HD",
    __proto__:computer
}
let hardware={};
console.log(lenovo);


console.log(`computer`, lenovo.__proto__);
*/

// There is another way to access properties of other objects beside the __proto__,  that is by setPrototypeOf(bject1, object2)
//  to get access it will be console.log(`name`, Object.getPrototypeOf(object));

let car={tyres : 4};
let tesla={
    driver : "AI"
}

Object.setPrototypeOf(tesla,car);
console.log(Object.getPrototypeOf(tesla));

