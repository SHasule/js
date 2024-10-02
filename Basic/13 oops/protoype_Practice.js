//  const user={
//     email:"xyz@gmail.com",
//     city:"latur"
//  }

//  const user2={
//     email:"pqr@gmail.com",
//     city:"latur"
//  }

//  Object.prototype.removeCity=function(){
//     console.log(`${this.city}`);
//  }
//  user.removeCity()
//  user2.removeCity()
//  console.log(user2 instanceof Object);


  const string1=" masters "
  console.log(string1.length);
   
   String.prototype.remover=function(){
         console.log(`${this}`);
         console.log(`${this.trim().length}`);
   }
  string1.remover()