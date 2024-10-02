
//closure1.js

//   let myname=function(name){

//     return function(){
//         console.log(name);
//     }
//   }
//    let store= myname('kiran')
//    store()


// let addition=function(a){

//      function add(b){
//          console.log(a+b)
//     } 
//    return add;
// }
//  let store= addition(1)
//  store(2)
// let store2=addition(8)
// store2(76)


  const h1= document.getElementById("h1")
  const button=document.getElementById("my-btn")
    
//  function makesize(size)
//  {
//     function changesize(){
//         h1.style.fontSize=`${size}px`
//     }
//     return changesize;

//  }
//  const size1=makesize(32)
//  const size2=makesize(84)
 
//   button.addEventListener("click",size1)



function makecount(){
   let  count =1
    function increment(){
         console.log(count++);
    }
    return increment
}
  let one=makecount()
  one()
  one()



