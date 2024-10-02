const user=new Object();
user.name="suraj";
user.id=2;
user.fullname={
  userName:{
      Name:"suraj",
      lname:"hasule"
  }
}
// console.log(user);
//console.log(user.fullname.userName.Name);

const obj1={1:'a',2:'b'}
const obj2={2:'c',4:'d'}

//const obj3={...obj1,...obj2}; // spread

 //const obj3=Object.assign({},obj1,obj2);
//  console.log(obj3);

 console.log(Object.keys(user));
 console.log(Object.values(user));
 console.log(Object.entries(user));
 console.log(user.hasOwnProperty("fullname"));
 
 
 


 
