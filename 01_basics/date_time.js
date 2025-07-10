// Date in js 

let myDate = new Date ();

console.log(myDate.toLocaleString());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

// let myDeclaredDate = new Date('2025,7,12');
let myDeclaredDate = new Date();
myDeclaredDate.setDate(14)
myDeclaredDate.setFullYear(2030)
console.log(myDeclaredDate.toLocaleDateString());


// Time in js

let time = Date.now()
console.log(Math.floor(time/1000));




