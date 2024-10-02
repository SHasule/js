// let a = 4;
// function myFunction() {
//   return a * a;
// }
// console.log(a);


//  function person1(){
//   const name="google";
//   function displayname(){
//     console.log(name);
//   }
//   return displayname
//  }
//  const newperson=person1()
//  newperson()

 
//  let sum=function(a){
//   //console.log("hello"+ a);
//   let c=2;
//   return function(b){
//     return a+b+c;
//   }
  
//  }
//  let store=sum(2);
//  console.log(store(2));


let sum=function(a,b,c){
  return{
   getsumTwo:function(){
    return a+b
   },
   getsumThree:function(){
    return a+b+c
   }
  }
}
let store=sum(1,2,3);
console.log(store.getsumTwo());

 
