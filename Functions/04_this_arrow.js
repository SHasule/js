

const user={
    name:'xyz',
    id:2,
    class:'bcaty',

      fullname:function(){
        console.log(`name is ${this.name} and id ${this.id}`);
        // console.log(this);

     }
}
// user.fullname()
user.name='pqr'
user.id=3;
user.fullname()
// console.log(this);
 
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
// console.log(user1.fullname());

// user1.hello=function(){
//   console.log(`function is ${this.id}`);
// }
// console.log(user1.hello());