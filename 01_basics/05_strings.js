const name="ajeet"
const repocount=50
console.log(name+repocount);
//Modern way to write string
console.log(`hello my name is ${name} and my repo count is ${repocount}`);
//another way to declare string
const gameName=new String('ajeetcsa')
console.log(gameName)
//In javascript string is object not an array
/* eg: "ajeetcsa"
   key: value
   0: "a"
   1: "j"
   2: "e"
   3: "e"
   4: "t"
   5: "c"
   6: "s"
   7: "a"
*/
console.log(gameName[0]);
console.log(gameName.__proto__); //this gives prototype of the object 
// IN this case it returned empty object{}
console.log(gameName.length);
console.log(gameName.toUpperCase()); //it converts the value in upper case
console.log(gameName.charAt(2)); //it returns character of the given position 
//output: e

console.log(gameName.indexOf('t')); //it gives the position of the given character
console.log(gameName.indexOf('e')); //in case of mutiple character it gives the first position
// Go through all methods of string either from mdn or web console by typing String.prototype

const newstring=gameName.substring(0,4) //SLicing
console.log(newstring); //does not include last index
// if we take negative value is substring it takes value from the start
//output: ajee
const anotherstring=gameName.slice(-7,4) //we can also give negative index when we use slice 
console.log(anotherstring)
//output: jee

const newString1="   ajeet   "
console.log(newString1.trim()); // it removes starting and ending space
//it also have start and end value and it only works for space and newline

const url="https://aj-eet.com/ajeet-%20-shukla"
console.log(url.replace('%20','-')) // it replaces the value 

console.log(url.includes('ajeet')); //it returns true if the given value is present 
console.log(url.includes('gandu')); 

//if we want to convert string into array with given condition
splittedArray=url.split('-')
console.log(splittedArray); 
const a="a";
const b="A";
//comparision is in basis of ASCII value
if (b>a) {
    console.log(`${b} is greater than ${a}`);
}
else{
    console.log(`${a} is greater than ${b}`);
}
// REvise string method before doing anything