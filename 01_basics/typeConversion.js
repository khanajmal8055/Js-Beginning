// let number = 33
let number = "33abc"
console.log(typeof number)

// let numInStr = String(number)
let strInNum = Number(number)
// console.log(numInStr);
console.log(strInNum);

// console.log(typeof numInStr);
console.log(typeof strInNum);

/*
33 => string
"33abc" => NaN

*/

let isLoggedIn = 1;

let conversion = Boolean(isLoggedIn)
console.log(conversion);
console.log(typeof conversion);


// 1 => true , 0=> false
// "" => false , "Ajmal" => true