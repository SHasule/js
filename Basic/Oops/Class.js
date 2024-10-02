
//  class User{
//   constructor(username,email,password){
//     this.username=username;
//     this.email=email;
//     this.password=password;
//   }

//   makePassword(){
//     return `${this.password}abc`
//   }
//   Changeusername(){
//     return `${this.username.toUpperCase()}`
//   }
//  }

//  const user=new User("elon","e@gmail.com","123")
//  console.log(user.Changeusername());


 function User(username,email,password){
  this.username=username;
  this.email=email;
  this.password=password;
 }
 
  User.prototype.Changeusername=function(){
 return `${this.username.toUpperCase()}`
  }

  User.prototype.makePassword= function(){
     return `${this.password}abc`
  }

 const user=new User("suraj","s@gmail.com","123")
 console.log(user.Changeusername());
 console.log(user.makePassword());
 
 