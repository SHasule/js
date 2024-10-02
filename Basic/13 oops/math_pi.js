
// console.log(Math.PI);
// Math.PI=4
// console.log(Math.PI);
 
//  const descriptor=Object.getOwnPropertyDescriptor(Math,'PI')
//  console.log(descriptor);

  const user={
    username:"jack",
    id:2,
    isloggedin:true
  }
  console.log(user);
 //console.log(Object.getOwnPropertyDescriptor(user,'id'));
  
     Object.defineProperty(user,'id',{
        writable:false,  // now we can't change id property
        enumerable:false
     })

     console.log(Object.getOwnPropertyDescriptor(user,'id'));

for(const [key,value] of Object.entries(user)){
    console.log(`${key} : ${value}`);
}
 
 console.log(user.id);
 console.log(user.username);