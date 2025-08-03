const user = {
    username: "ajeet",
    logincount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("got user details from the database");
        //console.log(`username: ${username}`); //this will give error 
        // jab hmme bahar se koi value leni hoti hai toh hmme execution context
        // ko btana pdta hai ki apne values me se leni hai for this 
        // we use ".this"
        console.log(`username: ${this.username}`);

        console.log(this); // this will give the current context
        
        
    }
}
console.log(user.username);
console.log(user.getUserDetails());
user.getUserDetails()

//if we print  this in global context 
console.log(this);
//in node we get empty 
//but in browser we get many things


//Constructor function
//this allows to make multiple instance from one object

// new key word is constructor fucntion

function User(username,logincount,isLoggedIn){
    this.username = username
    //left hand size is variable and right hand side is the 
    //value passed in the function
    // we don't which username we are using therefore we use .this
    this.logincount= logincount;
    this.isLoggedIn= isLoggedIn

    return this
    //this will return current context
}

const userOne = User("hitesh",12,true)
const userTwo= User("chai aur code",18,true)
// when we do this whole value get overwrite in userOne 
// that's we use construction function because each time it gives new instance or copy original do not get effect
// so to counter issue we will use "new" keyword
const userThree= new User("ajeet",1,false);
const userFour= new User(" ganesh", 8,true)
console.log(userOne)
console.log(userThree);
console.log(userFour);
//now output is also clean
// even if we do not write return this in fucntion then to it will print the value

//note on new keyword

// whenever we use "new" a new object is created
// a constructor function is called
// all arguments get inject in "this" function
// we get the value

