 // object literals
const userOne={
    name:"suraj",
    id:1,
    userDetails:function(){
        console.log(`name : ${this.name}`);
       
    }
  
}
// console.log(userOne.name);
// console.log(userOne.userDetails());
// console.log(this);


  function user (username,login,id){
   this.username=username;
   this.login=login;
   this.id=id;
    
   this.details=function(){
     console.log(`inside details username : ${this.username}`);
   }

    return this
  }
//    const user1= user('suraj',true,1)
//    const user2=user("pradeep",true,2) // it override value of user1
  
// we use new keyword it's stop overriding , it gives copy

  const user1= new user('suraj',true,1)
    const user2= new user("pradeep",true,2)
   
  console.log(user1);
  console.log(user2);
   console.log(user1 instanceof Object);


