

// promise_chaining.js
 let p= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("we are in first promise"); 
        resolve(65)  

    },2000)
   
 })
  
  p.then((value)=>{
    console.log(value)
    let p2=new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log("sec");
       },2000)
    })
  })
  .then((value)=>{
    console.log("hey");
    return 1
}).then((value)=>{
    console.log("fourth");
})
    //  p2.then((value)=>{
    //     console.log(value);
    //     let p3=new Promise((resolve,reject)=>{
    //         console.log("third promise");
    //         resolve(67)
    //     })
    //  })
     
    

       
  
       