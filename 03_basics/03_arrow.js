const user={
    username: "hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); //this function gives us a current context
        console.log(this);
    }
}
user.welcomeMessage()
user.username="sam" //current context of username changed
user.welcomeMessage()

console.log(this); //current context for global is empty {}

//but if we see in browser console the current context is windows
//this is a good interview question


//  function chai(){
//    const username= "ajeet"
//      console.log(this); //when we run this in a function it returns many value
//      console.log(this.username);  //here it gives undefined it only works for objects
//  }

// const chai = function(){
//     let username="hitesh"
//     console.log(this.username);
// }
// chai()

//++++++++++++++++++ arrow function +++++++++++++++

const chai=() =>{
    let username="ajeet"
    console.log(this);  // by using arrow function when we use 'this' we get empty paranthesis
    console.log(this.username);  //undefined
}
//chai()

()=>{}
//basic

// const addTwo =(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4));


//implicit return: we do not use paranthesis

const addTwo = (num1,num2) => (num1+num2)
//one liner
console.log(addTwo(3,4));

// if we use curly braces{} we need to use return statement if use () or don't use we do not need to return
//we need to use paranthesis if we need to return object 
//  
//const addTwo = (num1,num2) => ({username:"ajeet"})