// object destructuring

const course = {
    courseName : "Js in Hindi",
    price : "900",
    cousreInstrucor : "Hitesh Choudhary"
}

// if we want to access all the key value pair of object then we write lik this:

// const courseName = course.courseName;
// const coursePrice = course.price;
// const cousreInstrucor = course.cousreInstrucor;
// as the above process is so tedious to access the object value 
// console.log(courseName);
// console.log(coursePrice);
// console.log(cousreInstrucor);


// here is the simple way to access the value b using destructuring the object

const {courseName,cousreInstrucor,price} = course 
console.log(courseName);
console.log(cousreInstrucor);
console.log(price);

// and result is same 
