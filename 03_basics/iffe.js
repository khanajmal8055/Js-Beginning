// immmediately invoked function expression (iffe)

// named IFFE
(function database(){
    console.log(`DB connected`);
    
}) ();  // id we need two iffe then we have to use ';' after function execution

// unnamed IFFE

((name) => {
    console.log(`DB connected two ${name}`);
    
})("Ajmal")   // we can also pass parameter in iffe function 

