
// const promiseOne=new Promise(function(reslove,reject){
//    setTimeout(()=>{
//     reslove()
//     console.log("asyn task");
    
//    },1000)
// })
//  promiseOne.then(()=>{
//   console.log("complated");
  
//  })

//  new Promise(function(reslove,reject){
//  setTimeout(() => {
//   reslove()
//   console.log("asyn task2");
//  }, 1000);
// }).then(()=>{
//   console.log("task 2");
  
// })

// const promisethree=new Promise(function(reslove,reject){
//   setTimeout(()=>{
//     reslove({username:"suraj",email:"s@gmail.com"})
//   },2000)
// })
// promisethree.then((user)=>{
//  console.log(user);
 
// })

const promisefour=new Promise(function(reslove,reject){
  setTimeout(() => {
    let err=false;
    if(!err){
      reslove({username:"kiran",email:'k@gmail.com'})
    }
    else{
      reject("ERROR: something went wrong");
    }

  },1000);
})
promisefour.then((user)=>{
  console.log(user);
  return user.username;
}).then((username)=>{
console.log(username);

})
.catch((err)=>{
  console.log(err);  
}).finally(()=>console.log("executed promise either resolve or rejected")
)


// const promisefive=new Promise(function(reslove,reject){
//   let err=true;
//   if(!err){
//     reslove({username:"JS",email:'js@gmail.com'})
//   }
//   else{
//     reject("ERROR: something went wrong");
//   }
// })

// async function consumedPromise(){
//    try{
//     const respone=await promisefive
//    console.log(respone);
//    }
//    catch(err){
//   console.log(err);
//    }
// }
// consumedPromise()


//https://jsonplaceholder.typicode.com/todos/1

// async function getuser(){
//  try{
//   const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   const data= await response.json()
//   console.log(data);
//  }
//  catch(err){
//   console.log("E: ",err);
//  }   
// }
// getuser()

fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=>{
  return response.json()
}).then((data)=>{
  console.log(data);
}).catch((err)=>console.log(err)
)