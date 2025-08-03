class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    //In JavaScript, the extends keyword is used to create a class that inherits properties and methods from another
    //  class. This establishes a parent-child relationship, where the child class 
    // (subclass or derived class) gains access to the functionality of the parent class (superclass or base class).
    constructor(username,email,password){
        super(username) 
        // ye username ab directly jis class se copy kiye wha se access le lega
        //using super ab hme this and call ka use nhi kerna padega
        this.email = email
        this.password= password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }

    



}
const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.addCourse();
chai.logMe();

const masalaChai= new User("masaala chai")
masalaChai.logMe()
console.log(chai ===  masalaChai) //since they are not equal this will return false
console.log(chai instanceof User);