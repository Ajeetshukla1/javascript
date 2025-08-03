function User(email,password){
    this._email=email
    this._password = password

    //function is also a fucntion and object
    //so we will use its object property 
    // parameters: we have to give the context of the function using this, on which property we have to do the operation
    // and the functiions

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email= value

        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password= value

        }
    })
}

const chai=new User("ajeet@gamil","abc")
console.log(chai.email);
console.log(chai.password);
