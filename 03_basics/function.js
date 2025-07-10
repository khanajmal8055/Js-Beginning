
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

