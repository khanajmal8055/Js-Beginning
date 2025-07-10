
function fun(){
    console.log("hi");
    
}
fun();

function add(n1,n2){
    return n1+n2
}

let num1 = 2
let num2 = 5

// let result = add(3,2)
let result = add(num1,num2)
console.log(result);

function cartProductPrice (num){
    console.log(num[0]);
    


}
const price = [200,800,60,80]
cartProductPrice(price)
// cartProductPrice([200,800,60,80])


const user = {
    userName : "Ajmal",
    age: 18
}


function handleObject (getobject){
    return (`Hello ${getobject.userName} your age is ${getobject.age}`)
}

let ans = handleObject(user)
console.log(ans);


// closure check scope level


function outer(){
    const userName = "Ajmal"

    function inner (){
        const website = " youtube"
        console.log(userName + website); // here variable of outer function is accessibe 
    }
    // console.log(website); // here variable of inner cannot accessible
    inner()
    

}
outer()

console.log(addOne(5)); // we can call addOne function here also if the function declaration is like that mention below 

function addOne(num){ 
    return num + 1
}
// addOne(5) // we can call addOne function here also  


// addTwo() // we cannot call the function here
const addTwo = function(num){
    return num + 2
}

addTwo(7) // we can only call the function here onlu if fuction declared like the above 