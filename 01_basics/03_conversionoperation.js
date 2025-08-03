//let score="33abc"
//let score=null
//let score=undefined
//let score=true
//let score="abcde"

//const {score} = req.body // no gurantee of data type  we get here

//console.log(typeof score);
//console.log(typeof(score));
// type casting
//let valueInNumber=Number(score) // it will convert score into number
//console.log(typeof valueInNumber); //here in score we have taken characters also then how the it is showing number
// To check this we will se what value valueInNumber is holding
//console.log(valueInNumber); //Output: NaN
//Nan: not a number
//in case of null when we typecast it, it will return 0.
//in case of undefined it will Nan.
//in case of boolen it return 1 for true and 0 for false.
//in case of string it return Nan.

/*
"33"->33
"33abc"->Nan
true->1,false->0
*/
//let isloggedIn=1
//let isloggedIn=""
// let isloggedIn="ajeet"

// let booleanisloggedin=Boolean(isloggedIn)
// console.log(typeof booleanisloggedin)
// console.log(booleanisloggedin) // converts 1 into true.

/*
After converting to boolean
1->true
""empty string->false
"abc"(non empty string)-> true
*/
let something=33
let convertedstring=String(something)
//console.log(typeof convertedstring)
//console.log(convertedstring)

//"33"->33



//   OPERATIONS

let value =3 
let negvalue=-value
//console.log(negvalue)

// console.log(2+2)
// console.log(2**2) // 2 power 2

let str1="hello"
let str2=" ajeet"
let str3 =str1+str2
// console.log(str3)
//                     //output
// console.log("1"+2); //12 
// console.log(1+"2"); //12
// console.log("1"+2+2);//122
// console.log(1+2+"2");//32
// to understand this read documentation 
// for now string first all are treated string
// if sstring is last then first do the operation than do convert it in string

// console.log(+true); // output: 1
//in this first increment is happening therefore boolean is converted in number
// console.log(2+true); output: 1
//console.log(+""); output: 0

let gameCounter=100
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter)

// study prefix and postfic operator from js mdn
