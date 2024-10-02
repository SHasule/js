
let a=10;
let b=10
 if(true){
  //  console.log(a+b);
 }


   function one(){
    const name="suraj"
    function two(){
        console.log("two",name);
       // console.log(name3);
        const name2="hasule"
        function three(){
            const name3="kiran"
            console.log("three",name);
            console.log("three :",name2);
        }
        three()
    } 
    two()
    
   }
   one()



//    ++++++++++ hoisting +++++

 console.log(add(1,2)); 
function add(a,b){
    return a+b
}



// function declation with varible
// console.log(addition(1,4));          // can't access funtion before initialization
 const addition=function sum(a,b){
  return a+b   
 }
 console.log(addition(1,4));  

 // variable hoisting 
 x=2
 console.log(x+1);
var x;             // using let,const variable hosting its not possible, it gives error