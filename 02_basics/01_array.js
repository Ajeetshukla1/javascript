//   array
//note
//js array are resizable and can contain mix of differernt data types
//interview questioin
//when we copy array in js it creates shallow copies
//shallow copies: it means same reference point is shared

const myArr1 = [0,1,2,3,4,5,6]
const myHero=["shaktiman","batman","superman"]
const myArr2= new Array(1,2,3,4,5,6)
console.log(myArr1[0])

//  Array methods 

myArr1.push(7)
myArr1.push(8)
myArr1.pop() //removes last value
myArr1.unshift(9) //it adds value in first position 
// for large set values it is not optimize 
// but for small set of values we can use like in to do list 
console.log(myArr1);
myArr1.shift() //it removes the value from the first position
console.log(myArr1);

console.log(myArr1.includes(9)) //returns true if value exist 
console.log(myArr1.indexOf(3)) //if value exist returns the index of that value if value does not exist it returns -1\

const newArr = myArr1.join() // 
console.log(newArr);
// Adds all the the element of the array into string, separated by specified seperator string
//by default seperator is comma(,)
console.log(typeof newArr); 

// Slice, Splice

//slice
console.log("A ",myArr1);
const myn1= myArr1.slice(1,3)
console.log(myn1);
console.log("B ", myArr1);


//splice
console.log("A ",myArr1);
const myn2= myArr1.splice(1,3)
//it returns the value of specified section inlcudes last index also 
// but it also removes the specified value from the original array 
console.log(myn2);
console.log("C ", myArr1);

/* basic difference
slice                                 splice
Returns the value from the          Similar 
specified section 

It does not include end value       It includes end value.

It does not change the array on     It removes the value from the specified index 
which we are doing operation.       of the array on which we are doing operation. 


*/
//consle in browser
// declare an array 
//and write array name 
//click on prototype 
// you will get the different array methods

//in case of string declare it by new method 
// write string name and enter click on the prototype you will get the different string method
