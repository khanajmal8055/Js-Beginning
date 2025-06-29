// Primitive data types (number, string, undefined, null , boolean, symbol)
//  non-primitive data type (array, objects)

// Stack(Primitive data types) 
// Heap(non-primitive data type)


let name = "Ajmal";
let naam = name;
naam = "Ajju";
console.log(name);
console.log(naam);


let userOne =  {
    email : "user@google.com",
    upi : "123@ybl"
}

let userTwo = userOne

userTwo.email = "ajju@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);

