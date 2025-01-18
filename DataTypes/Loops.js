/*
Loops in Js
1. while
2. Do while
3. For   --for in
         --for of
         --for each
*/
/*
let sum=0;
let i=0;
while(i<=5){
    sum=sum+i;
    i++;
}
console.log(sum);

*/

//WRITE A 'WHILE LOOP ' THAT COUNTS DOWN FROM 5 TO 1 AND STORES THE NUMBER IN AN ARRAY NAMED 'COUNTDOWN'

/*
let arr=[];
let i=5;
while(i>=1){
    arr.push(i);
    i--;
}
console.log(arr);

*/

//WRITE A DO WHILE LOOP THAT PROMPTS A USER TO ENTER THEIR FAVORITE TEA TYPE UNTIL THEY ENTER "STOP",
//STORE EACH TEA TYPE IN AN ARRAY NAME TEAC

/*
let arr=[];
let tea 

do{
    tea=prompt(`Enter your favorite tes( type "stop" to finish)`);
    if(tea!=="stop"){
        arr.push(tea);
    }
}while(tea!=="stop");
console.log(arr);

*/

//WRITE A DO WHILE LOOP THAT ADDS NUMBERS FROM 1 TO 3 AND STORES THE RESULT IN A VARIABLE NAMED 'TOTAL'

/*let total =0;
let i=1;
do{
 total=total+i;
 i++;}
 while(i<=3);
 console.log(total);
*/

// WRITE A FOR LOOP THAT MULTIPLIES EACH ELEMENT IN THE ARRAY[2,4,6] BY 2 AND STORES THE RESULTS IN A NEW ARRAY

/*
let arr=[2,4,6];
let arr2=[];
let b;
let i;
for(i=0;i<arr.length;i++){
    b=arr[i]*2;
    arr2.push(b);
}
console.log(arr2);

*/

// WRITE A FOR LOOP THAT LISTS ALL THE CITIES IN THE ARAY ['PARIS','NEW YORK','TOKYO','LONDON'] AND STORE EACH CITY IN A NEW ARRAY


let arr=['PARIS','NEW YORK','TOKYO','LONDON'];
let arr2=[];
for(let i=0; i<arr.length;i++){
    arr2.push(arr[i]);
    console.log(arr2);
}
console.log(arr2);