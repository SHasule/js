
// let asymbol=Symbol("symbol_key")
// const user1={
//   name:"kiran",
//   id:1,
//   [asymbol]:"symbol",
//    fullname:function(){
//     console.log(`name is ${this.name} and id is ${this.id}`);    
//    }

// }
//  user1.fullname
//  user1.id=(2)
//  console.log(user1);
// //  Object.freeze(user1)
//  user1.id=(3)
//  console.log(user1);
//  console.log(user1[asymbol]);
//  console.log(user1);

// console.log(Object.keys(user1));
// console.log(Object.values(user1));
// console.log(Object.entries(user1.fullname));
// console.log(Object.entries(user1));
// console.log(user1.hasOwnproperty('id'))




// console.log(user1.fullname());

// user1.hello=function(){
//   console.log(`function is ${this.id}`);
// }
// console.log(user1.hello());



// +++++++ join to object ++++++ 
// ++ spread operator+++
let obj1={
    id:2,
    name:"java"
}
// console.log(obj1);

let obj2={
    id:3,
    name:"react"
}
// console.log(obj2);

    const obj3={...obj1, ...obj2}
    console.log(obj3);

// +++++ through assign method

   const obj4=Object.assign({},obj1,obj2)
   console.log(obj4);