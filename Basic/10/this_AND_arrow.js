

const user={
    username:"suraj hasule",
    email:"suraj@gmail.com",
       hello:function (){
        console.log(`${this.username} ,  logged in device`);
        // console.log(this);
        
       }

}
user.hello()
// user.username="sam"
// user.hello()
//console.log(this);      // it show {} empty object






// +++++++++function +++++++
 function one(){
    const username="joy"
   // console.log(this);
    console.log(this.username);             // it shows undefined
 }
// one()

// explicit return arrow function
const addnum =(n1,n2)=>{
    return n1+n2
}
console.log(addnum(2,3));

// implicite retrun arrrow function
 const addition=(n1,n2)=>n1+n2;
 addition(1,41)

 // object 
const objExample=()=>({username:"krish"})
console.log(objExample());


// +++++ IIFE++++++++

 (function name(){
    console.log("this is named IIFE");
 })();

  ( ()=>{
    console.log(`simple IIFE`);
  } )();


  ((name)=>{
   console.log(`${name} welcome`);
  })("paul")