function setUsername(username){
    this.username=username
}
function createUser(username,email, password ){
     //setUsername(username)
     //call ho rha hai but kewal reference ja rha hai kaam nhi ho rha hai execute hone ke baad reference gayab ho jata hai
     // to hold reference we use call

     setUsername.call(this, username) // ab function me jo parameter mila hai whi wala parameter function me jaake hold krega jo function me daale hai uske parameter ki value nhi lega
     //isse ye faida hua ki jo setUsername ka parameter ud ja rha thha call kerne ke baad ab usse pareshani nhi hogi kyu ki hmne ab is hi functioin ki value dedi hai using this
     this.email= email
     this.password= password

}