const user = {
    userName : "Ajmal",
    id : 1,
    welcomeMessage : function (){
        console.log(`${user.userName} welcome to the website`) // if we access the userName like this then we can able to access the updated value of userName but it is not the best practice
        // console.log(`${this.userName} welcome to the website`) // this can be only used in objects and this returns an object of global 
        console.log(this); // here this return an object of global which is object user
        
    },
    // console.log(this)
    
}

user.welcomeMessage()
user.userName = "Ajju" // here we can change the value object 
user.welcomeMessage()

console.log(this); // here empty object is return bcz we are using the node module if we are in browser then it will return window object


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// ARROW FUNCTION

// const add = function (num1,num2){

// }

// const add = (num1, num2) => {
//     return num1 +num2
// }

const add = (num1, num2) =>  (num1 +num2)

console.log(add(7,5));


// return object from function using arrow function

const object = () => ({name : "Ajmal"})
// const object = () => {name : "Ajmal"} // it will return undefined

console.log(object());




    

