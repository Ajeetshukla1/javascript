const User = {
    _email: 'h@hc.x', // when we use _ it mean we are using private property and when we use getter and setter than underscore doesn't count
    _password: "abc",

    get email(){
        return this._email.toUpperCase()

    },

    set email(value){
        this._email = value

    }
}
// we can use factory function
const tea = Object.create(User)
console.log(tea.email); 

