
//  const firstPromise=new Promise(function(reslove,reject){
//    let login=true;
//    if(login){
//     setTimeout(()=>{
//       reslove({username:"suraj",email:"a@gmail.com"})
//       console.log("use logged in");
//     },2000)  
//    }
//    else{
//        reject("ERROR")
//    }
//  })
//  firstPromise.then((user)=>{
//   console.log(user);
//   console.log("complated");
//   return user.username
//  }).then((username)=>{
//     console.log(username);
    
//  })
//  .catch((err)=>{
//    console.log(err);
//  })

// async function promiseTwo(){
//       try{
//         const respone=await fetch("https://jsonplaceholder.typicode.com/todos/1")
//       const data= await respone.json()
//       console.log(data);
//       }
//       catch(err){
//        console.log(err);
//       }  
//  }
//  promiseTwo()

fetch("https://jsonplaceholder.typicode.com/todos/1").then((Response)=>{
  return Response.json()
}).then((data)=>{
console.log(data);
}).catch((err)=>{
  console.log("err",err);
  
})

  

