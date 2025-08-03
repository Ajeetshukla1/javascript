class User {
    constructor(email, password){
        this.email = email;
        this.password= password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value

    }    
    get password(){
        return `${this._password.toUpperCase()}ajeet`
        // if we have given getter than we have to define setter also
        
    }
    set password(value){
        this._password= value
        //we are setting password two time so this will give errro 
        //maximum call stack size exceeded
        //to counter this issue we take different variable in both get 
        //and set
        //jo value jo hm store ker rhe hai wo setter me hoti hai 
        // per jo value hm dete hai user woh usse get se milti hai
    }
}
const hitesh = new User("j@hitesh.ai","123")
console.log(hitesh.password);
console.log(hitesh.email);

