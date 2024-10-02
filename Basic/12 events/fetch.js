

// async function users(){
//     try {
//         const response= await fetch("https://cat-fact.herokuapp.com/facts") 
//         const data= await response.json()
//         console.log(data);
//         // console.log(response);
//     } catch (error) {
//         console.log("E : ",error);
//     }
   
// }
// users()

fetch('https://cat-fact.herokuapp.com/facts')
.then((response)=>{
  return response.json()
}).then((data)=>
console.log(data))
.catch((error)=>console.log('error',error))