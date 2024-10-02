
 const mysymbol= Symbol("key1")
const userone={
  name:"suraj",
  id:"2",
  [mysymbol]:"key1",
  email:"S@gmail.com",
  subject:['math',"histroy",'science'],
  info:function(){
    fullname="surajhasule";
    console.log(fullname);
    
  }
} 

// console.log(userone);
console.log(userone.name);
 userone.email="z@gmail.com"
//  delete userone.email
console.log(userone["email"]);
console.log(userone.info());
console.log( typeof userone[mysymbol]);

// console.log(userone);
// console.log(Object.freeze(userone));
// userone.email="A@gmail.com"
// console.log(userone.email);

userone.hello=function(){
  console.log("js user ");
}
console.log(userone.hello());


userone.userName=function(){
  console.log(`js user is ${this.name}`);
}
console.log(userone.userName());










