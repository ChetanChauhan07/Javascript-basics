// WRITE A FOR LOOP THAT LOOPS THROUGH THE ARRAY ['GREEN TEA','BLACK TEA','CHAI','OOLANG TEA'] AND STOPS THE LOOP WHEN IT FINDS 'CHAI'.
// STORES ALL TEAS BEFORE 'CHAI' IN A NEW ARRAY.

/*
let arr=['GREEN TEA','BLACK TEA','CHAI','OOLANG TEA'];
let arr2=[];

for(let i=0 ; i<arr.length; i++){
    if(arr[i]=="CHAI"){
        break;
    }
    else{
        arr2.push(arr[i]);
    }
}
console.log(arr2);
*/

// CONTINUE; :-     Used in place of break if we want to skip some condition and continues the loop further.

/* 
    FOROF LOOP :- Use a for-of loop to iterate through the array [1,2,3,4,5] and stop when the number 4 in an array is found.
    Store the numbers before 4 in an array.

*/
/*
let arr=[1,2,3,4,5];
let arr2=[];

for (const num of arr) {
    if(num===4){
        break;
    }
    arr2.push(num);
}
console.log(arr2);
*/

// FOR-IN loop :- Use a for-in loop to loop through an object containing city populations.
//                Stop the loop when the population of Berlin is found and store all the population in a new object.
//                let citiespopulation = { "London": 10000, "Paris" : 20000,"Berlin": 30000, "NYC": 40000};

/*
let citiespopulation = { "London": 10000, "Paris" : 20000,"Berlin": 30000, "NYC": 40000};
let arr={};
for (const city in citiespopulation) {
    console.log(city);
    console.log(citiespopulation[city]);
    if(city=="Berlin"){
        break;
    }
    arr[city]=citiespopulation[city];
}
console.log(arr);
*/

//FOREACH :- write a FOREACH loop that iterates through the array ['tea', 'coffee', 'softy', 'drink'].
//           Stop the loop when softy is found and store all the preavious values in an array.

let arr=['tea', 'coffee', 'softy', 'drink'];
let arr2=[];

arr.forEach((tea) => {
    if(tea =="softy"){
        return;
    }
    arr2.push(tea);
});
console.log(arr2) ;
