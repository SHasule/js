

//   let promiseOne=new Promise(function(resolve,reject){
//        // do an Asyn task
//       setTimeout(()=>{
//         console.log("Asyn one is completed");
//       },1000) 
//       resolve()

//   })

//   promiseOne.then(function(){
//     console.log("after asyn1 ");
//   })



// let promisetwo=new Promise(function(resolve,reject){

//    setTimeout(()=>{  
//     console.log("asyn task 2 ...");
//     resolve()
//    },1000)  
// })

// promisetwo.then(()=>{              // promise consummation
//  console.log(" asyn2  resolved");
// })



// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("asyn task 3");
//         resolve()
//     },2000)
// }).then(()=>{
//     console.log("asyn 3 resolved");
// })


// const promisefour=new Promise(function(resolve,reject){
//    setTimeout(() => {
//     console.log("asyn 4");
//     resolve({usename:"suraj",email:"suraj@gmail.com"})
//    }, 2000);
// })

// promisefour.then((user)=>{
//     console.log(user);
//     console.log("asyn 4 resolved");
// })


// const promiseFive=new  Promise((resolve,reject)=>{
//     setTimeout(() => {
//          let error=true

//              if(!error){
//                 console.log("asyn task 5"); 
//        resolve({username:"kunal",email:"xyz@gmail.com"})
//              }
//              else{
//                 console.log("ERROR: something went wrong");
//              }   
//     }, 2000);
// })
// promiseFive.then((user)=>{
// console.log(user);

//  return user.username
// }).then((username)=>{
// console.log(username);
// }).catch((err)=>{
//  console.log(err);
// })
// .finally(() => {
//     console.log('Experiment completed');
//   });



const promisesix = new Promise(function (resolve, reject) {

    setTimeout(() => {
        let error = true;
        if (!error) {
            console.log("ashyn task six");
            resolve({ userid: 1, name: "harsh", email: "harsh@gmail.com" })
        }
        else {
            reject("ERROR: somthing went wrong")
        }

    }, 1000);
})

// promise conssumed using asyn await function
async function conssumesix() {
    try {
        let response = await promisesix
        console.log(response);
    }
    catch (err) {
        console.log(err);

    }
}
conssumesix()

//   promisesix.then((user)=>{
//     console.log("six resolved");
//     console.log(user);
//     return user.email
//   }).then((email)=>{
//                 console.log(email);
//   }).catch((err)=>{
//     console.log(err);
//   }).finally(()=>{
//     console.log("always executed");
//   })
