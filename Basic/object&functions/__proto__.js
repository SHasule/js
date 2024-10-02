
 const teacher={
  isavialable:true,
  email:"T@gmail.com",

 }

 const TAsupport={
   subject:'js assisment',
   fulltime:true, 
 }
 const editor={
  editing:true
  
 }

 const user={
    package:2000,
 // __proto__:TAsupport

 }
 //console.log(user.email);
 console.log(user.subject);

 // modern syntax
 Object.setPrototypeOf(teacher,user)

 
 