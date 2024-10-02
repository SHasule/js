
// function main(mainname){
//     let name="hey"
//     function sayname(){
//         console.log(name + mainname);
//     }
//     return sayname
// }
//  let fn= main("cocsit")
//  console.log(fn);
//  fn()
//  fn()

 function add(num){
    function add2(b){
        // let b=1
        console.log(num+b);
    }
    return add2;
 }
   let adder=add(3);
   adder(8);
   adder(6)




   //
   let message = "Hello";
function buildGreeting() {
  console.log(message);
  let audience = "World";
  function greetUser() {
    console.log(message + " " + audience);
  }
  greetUser();
}
buildGreeting();
   