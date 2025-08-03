const userEmail=[]
if(userEmail){
    console.log("Got user email");

}else{
    console.log("Don't have user email");
}
//truthy and falsy value
//the value which return truth and false

// falsy value

//false, 0, -0 , BigInt 0n , "" , NULL , undefined , NaN

// Truthy values

// "0" , 'false' , " " , [] , {} , function(){}

// if empty array is truthy value than how to check
// we will use the lenght property

if(userEmail.length ==0){
    console.log("Array is empty");
}

const emptyobj={}
//how to check for object
//we will check for keys
// object.keys() it will give array of the keys in object
if(Object.keys(emptyobj).length === 0){
console.log("object is empty");

}

// NULLISH COALESCING operator(??): null undefined
let val1;
val1 = 5 ?? 10

// we use ?? on that  cases when we get null or undefined from the database 
// we use this so that our codestructure does not get effected 

val1 = null ?? 10
console.log(val1);
//output: 10(instead of returning null it will give value 10)
val1= undefined ?? 15
//output: 15


// Terniary Operator

// condition ? true :  false

const iceTeaPrice =100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80") 