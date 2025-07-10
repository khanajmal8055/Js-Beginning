// singleton 

const user = new Object()  // it is same as const user = {}

user.id = 1;
user.name = "Ajju Khan"

// console.log(user);

const us1 = {
    id : 1,
    name : "Ajmal"
}

const n1 = {1:"a",2:"b"}

// const us2 = {user , us1}

// const us2 = Object.assign({},us1,n1)

const us2 = {...us1,...n1}

// console.log(us2);



// nested object inside array

const details = [
    {
        id: 1,
        email:"mdajmal3364@gmail.com"

    },
    {
        id:2,
        email:"ajj675@gmail.com"
    }
]

// console.log(details[0].email);


const tinderUser = {
    id:1,
    name:"Ajmal",
    loggedIn : false
}


console.log(Object.keys(tinderUser)); // retruns an array
console.log(Object.values(tinderUser)); // retruns an array 


 
