const myArr = [0,1,2,3,4,5];

// console.log(myArr[2]);

// myArr.push(6);// add the elemnt at the last position of the array

// myArr.pop() // remeove the element from the last psotion of the array

// myArr.unshift(9) // add the element at the first positon of the array

// myArr.shift()  // remove the element from the fisrt position of the array


// const n1 = myArr.slice(1,3) // retruns the ele from start to last-1 but does not change the original array 
// console.log("A",myArr); 
// console.log(n1);

// const n2 = myArr.splice(1,3) // retruns the ele from start to last but it changes original array also

// console.log("B", myArr);
// console.log(n2);


const marvel_heros = ["spiderman", "thor","ironman"]

const dc_heros = ["batman","superman", "flash"]

// marvel_heros.push(dc_heros) // by use push it adds the dc_heros to marvel_heros as a array not seperate ele 

// console.log(marvel_heros);

// const all_heros = marvel_heros.concat(dc_heros); // by use of concat method it adds all ele of array to another array as seperate ele

// console.log(all_heros);

// another way of add array ele by spread operator

// const all_heros = [...marvel_heros,...dc_heros]

// console.log(all_heros);

const n1 = [1,2,3,[4,5],6,7,[8,9,[10]]]

const n2 = n1.flat(Infinity) // it uses to spread all the arr ele which stored in array
// console.log(n2);



console.log(Array.isArray("Ajmal"));
console.log(Array.from("Ajmal"));
console.log(Array.from({name:"Ajmal"}));

let score1 = 100
let score2 = 200
let score3 = 300

const all_score = (Array.of(score1,score2,score3))

console.log(all_score);














