
(function name(){
    console.log("iife function");    // remove global polution, immediately execution
})();
  
((name2)=>{
    console.log(`simple ${name2}`);
})('iife function');