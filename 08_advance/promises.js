// how to make promise
//promise is an "object" represents the eventual completion (or failure)of an asynchronous operation and its resulting value.
// promise is an objects is very important thing
const promiseOne = new Promise(function(resolve,reject){
    // do an asyn task
    //Eg) Database calls , cryptography , network, 
    setTimeout(function(){
        console.log('Async task complete');
        resolve()
    },1000)
     // now it is connected to .then
})

//consume the promise
// .then is has connection with resolve
promiseOne.then(function(){
    console.log("promise consumed");
}) 

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000) // jab ye promise wala kaam ho jayega tab jaake resolve .then ko call krega phir then wala part execute hoga
}).then(function(){
    console.log("async 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
//   how to pass value from promise to .then
    resolve({username: "chai", email: "chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user) //this value is passed from promise resolve
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
       let error = false;
       if(!error){
        resolve({username: "hitesh", pass: "123"})

    }
    else{
        reject( "Error : something went wrong") //rejection gives error
    }
    },1000)
})
// how to consume promiseFour
// using .then we will get values, using .catch we will get error
// we can use as many as .then and .catch
promiseFour.then((user)=> {
    console.log(user);
    return user.username // where this return is going?


}).then((username) => { // jo uper wale .then value me return ho rhi hai whi value iske  ander aayegi 
               // this thing is called chaining
     console.log(username);
}).catch(function(error){
    console.log(error)

}).finally(()=>{
    console.log("the promise is either resolved or rejected")
})


const promiseFive = new Promise(function(resolve ,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "ajeet", pass: "123"})


        }
        else{
            reject('Error : js went wrong ')

        }
    },1000)
})
// promise can also be handeled by async , await
// because promise is the thing that is going to happen in future

/*async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
} */
// here we have not handled the error but then to it will not give error because of async await

// now handle the error using try and catch

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

async function getAllUsers() {
    try {
        const response = await  fetch('https://jsonplaceholder.typicode.com/users') // we use await because this process take time
        const data = await response.json() // conversion to json also take time
console.log(data);
    } catch (error) {
        console.log("E:  ", error);
        
        
    }
    
}
//getAllUsers()

// now usin this and catch


 fetch('https://jsonplaceholder.typicode.com/users')
 .then((response)=> {
    return response.json() // we have return data now to handle we will use another .then
 })
 .then((data)=>{
     console.log(data);
 })
 .catch((error)=>console.log(error))

 // as we can see in console the above the fetch task is completed first then any other task is completed
// because fetch call backs are stored in micro task priority queue therefore they go first in call stack and get executed


// fetch do to works 
// first one is to reserve space in database 
// data:______
// on fulfilled[]-> this is promise resolve
//they are array s
// on rejection[] -> this is promise rejection

// second one is to access webbrowser based api or node based api
//then it goes to network request
// either data will go to network or not 
// if any reponse then it will go to resolve (fulfilled[])
// if no response then rejection

//NOTE: every error is considered in on fullfilled because there is network request then we get to know therer is error 
