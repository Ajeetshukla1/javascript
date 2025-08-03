class User{
    constructor(username){
        this.username= username

    }
    logMe(){
        console.log(`username: ${this.username}`);
        
    }
    static createId(){
        return `123`
        //static: jab hm her us object ko iss method ka access nhi dena chahte hai 

    }
}

const hitesh = new User("hitesh")

// console.log(hitesh.createId()) // this will give error becasue of static

class teacher extends User{
    constructor(username, email){
        super(username)
        this.email=email
    }
}
const iphone = new teacher(" iphone ", "iphone@gmail.com")

iphone.logMe()
//console.log(iphone.createId()) // stil give error due to static


