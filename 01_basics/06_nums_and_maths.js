const score=400
console.log(score);
// we can also define data type explicitly
const balance = new Number(100)
console.log(balance); 
//there is difference between both ways 
//in output new method shows data type also when we use console.log

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //we will use this many times while using e commerce website because it gives the precision value till which you want
// here we want precision value till 2 digit
// so output will be 100.00

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));
//it gives the value till the precision till where you want
//output: 23.9 precision till 3 value
const checkNumberOne= 123.8966
console.log(checkNumberOne.toPrecision(3));
//output: 124 
// here it has given precison till 3 value rest is roundoff
const checkNumberTwo = 1123.8966


console.log(checkNumberTwo.toPrecision(3));
//since significant digit is more than given precision, due to this we get output in scientific notation 
//output: 1.12e+3
/*
oPrecision(n) returns a string representing the number with exactly n significant digits.

If the number of digits before the decimal point (the integer part) is greater than or equal
to the specified precision, JavaScript will use scientific notation to ensure the correct number
of significant digits are shown
For 123.8966.toPrecision(3):

The integer part ("123") has 3 digits, which matches the precision.

JavaScript rounds the number to 3 significant digits: "124".

Since the integer part fits within the precision, fixed-point notation is used.

For 1123.8966.toPrecision(3):

The integer part ("1123") has 4 digits, which is greater than the specified precision (3).

JavaScript cannot show 3 significant digits in fixed-point notation without dropping digits from the integer part.

Therefore, it switches to scientific notation: "1.12e+3" (which means 
1.12
×
10
3
1.12×10 
3
 ), to clearly represent 3 significant digits
 */
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
// output: 10,00,000
// using this way we can give comma(,) in between number 
//for simplicity by defaul it follows US system for indian system we need to specify



// **************** MATHS ***********************

//in maths library we get many functions

console.log(Math);
console.log(Math.abs(-4)); //gives absolute value
console.log(Math.round(4.6)); //it will round of the value
console.log(Math.ceil(4.3)); //it will round of to upper value
//output: 5
console.log(Math.floor(4.9));// it will round of to lower value
//output: 4
console.log(Math.min(4,3,5,6,1));
console.log(Math.max(4,3,5,6,1));

// where we will use math library most
console.log(Math.random()); // it will give random value between 0 to 1
// to get more digit we multiply with multiple of 10
console.log((Math.random()*10)+1);
// to avoid case of getting 0 we add 1 also
console.log(Math.floor((Math.random()*10)+1)) // to get integer value
const min=10
const max=20
// Proper way to use math.random for project purpose and to specify the range

console.log(Math.floor(Math.random()*(max-min+1))+min);