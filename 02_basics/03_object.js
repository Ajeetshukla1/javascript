// two ways to declare object 
//1. Literal
//2. constructer

//singleton: if we make object from constructor than sigleton object is made
//when we declare object from literal method than it  is not singleton

//OBJECT LITERALS
//object have keys and values


//how to use symbol in objects
// we cannot use symbols directly in the object first we need to declare 
const mySum=Symbol("key1")

const jsUser={
    name: "Ajeet", // by default keys are which are words in background are treated as string 
    age: 18,
    [mySum]: "mykey1", //  we use square bracket to use it as symbol, if we donot use square bracket it will behave like string.
    location: "lucknow",
    email: "aj@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"],
    "full_name": "Ajeet shukla"
}
// how to access objects
console.log(jsUser.age);
//but this method is not good

//console.log(jsUser[email])
//this will give error because behind the scene keys that are words are treated as string.

//therfore we need to write email as string
console.log(jsUser["email"])
console.log(jsUser["full_name"]);
//this is the reason we usually do not use dot method to access the object
//here we can not access the object using dot method
//jsUser."full_name" it will give error 
//that's we use square bracket method to access elements of the object


jsUser.email="ajeetchatgpt.com"
console.log(jsUser["email"]);
//if we want that object value cannot be changed
// we use freeze method
//Object.freeze(jsUser)
jsUser.email="babubhai@gmail.com"
console.log(jsUser["email"]);
//now the value will not change

console.log(jsUser)


//functions in object
jsUser.greeting = function(){
    console.log("hello js user")
}
console.log(jsUser.greeting);
//[Function (anonymous)]

jsUser.greetingTwo=  function(){
    console.log(`hello js user, ${this.name}`);
    //this is used when we want to access the same object in which function is present

}
console.log(jsUser.greeting());
//output:hello js user
       //undefined
console.log(jsUser.greetingTwo());
//output:hello js user, Ajeet
       //undefined
jsUser.greeting();
//output: hello js user
console.log(jsUser);

