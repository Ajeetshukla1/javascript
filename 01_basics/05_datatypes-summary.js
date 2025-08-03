/*Two types of data type:
Primitive:
7 types: string, number, boolean , null, undefined , symbol ,
bigint

Reference(Non primitive):

array,objects, functions
*/
//Symbol
const id=Symbol("123")
const anotherId=Symbol("123")
//console.log(id===anotherId);// it will give false because symbol gives unnique id


//ARRAYS

const heros = ["shaktiman","naagraj","doga"]
//;OBJECTS
// {
//     name: "hitesh",
//     age: 22,
// }
//in object data type can be anything
// we can also store it in variable
// let obj={
//     id: 1,
//     place: "lucknow",
// }
const BigInt=1233546557778888n
console.log(typeof BigInt);
//FUNCTION

const myFunction=function(){
    console.log("hello ji");
}
//NOTE: non primitive data type are object
/*
Primitive DataTypes:These are call-by-value. The types of primitive data types include String, Number, Boolean, Null, Undefined, Symbol, and BigInt. Note that Symbols uniquely identify variables, even if two variables have the same data and data type. Primitive variables datatype is same but null datatype is object 


1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

3,Boolean: Represents a binary value, either true or false, often used for conditional logic.

4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

6.Symbol (ES6): it is mostly used used to find uniqnece.

7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.

 Refence (Object Data Types):These are call-by-reference. The types of non-primitive data types are Array, Object, and Function. The data type for these is 'object,' but for functions, they return a data type of 'function,' though they also have an object data type.



1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

4.Date: Represents dates and times.

5.RegExp: Represents regular expressions for pattern matching.
* Premitive Datatypes

                  Type                                   typeof

i)             Number                               number
ii)            String                                   string
iii)           Boolean                               boolean
iv)           Bigint                                   bigint
v)            Symbol                                symbol
vi)           Null                                      object
vii)          Undefined                           undefined


* Non-Premitive OR Referance OR Object datatype

                  Type                                   typeof

i)               Object                                object
ii)              Array                                  object
iii)             Function                            function(object)
*/

//Two types of memory:
//stack(used in primitive) and heap(used in non-premitive or reference)
let name="ajeetisgood" 
let anothername=name //it gives the copy of name not exact reference
anothername="ajeetisbad"
console.log(name) //output:ajeetisgood
console.log(anothername) //output: ajeetisbad

let user1={
    email: "ok@123",
    upi: "user@ybl"

}
let user2=user1 //here we have not given copy but the reference of user1
user2.email="ok@456" //therefore when we change here it also changees the value in user1
console.log(user1.email) //output: ok@456
console.log(user2.email) //output: ok@456