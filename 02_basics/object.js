

// Object Literals

let mySym = Symbol("Key1") // symbol declaration and intialization

const user= {
    name:"Ajmal",
    age : 18,
    [mySym] : "Mykey1",
    location : "Bokaro",
    email : "mdajmal3364@gmail.com",
    isLoggedIn : false,
    loggedInDays : ["Monday", "Friday"]
}

console.log(user.name); // accessing the object key with dot 
console.log(user["age"]); // accessing the object key with brackets 

user.email = "ajjukhan7367@gmail.com"; // change the value of email
// Object.freeze(user) // frezee method passes the object name  as arguments which freezes the object that we cannot change the or add in the object

user.email = "ajmal1234@hp.com"

user.greeting = function() {    // adding function to user object
    console.log("Hello User");
    
}
user.greeting1 = function() {
    console.log(`Hello User ${this.name}`);  // this keyword use to access the instance of object 
    
}
console.log(user.greeting1());
console.log(user.loggedInDays[0]);


console.log(user);

