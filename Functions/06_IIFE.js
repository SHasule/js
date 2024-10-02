

 (function check2 (){
         // named IIFE => immediately invoke function expression
    console.log(`DB connected`);
  })();

  ((name)=>{
    //simple IIFE
console.log(`${name}DB CONNECTED TWO`);
} )('xyz')
 