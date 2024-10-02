
// const loaction=document.getElementById("get-location");

// async function getData(lat,long){
//   const promise= await fetch(`http://api.weatherapi.com/v1/current.json?key=0b45fa96edff4157aae45943242908&q=${lat},${long}&aqi=yes`)
//  return await promise.json()
// }

//   async function gotlocation(position){
// //  console.log(position);
//  const result= await getData(position.coords.latitude,
//   position.coords.longitude)
//   console.log(result);
  
//   }
//   function failedlocation(){
//     console.log("some issue");
    
//   }
// loaction.addEventListener("click", async()=>{
//   navigator.geolocation.getCurrentPosition(gotlocation,failedlocation)
// })

const loaction=document.getElementById("get-location");
 let current_loc=document.getElementById("current-loc");
async function getData(lat,long){
  const promise= await fetch(`http://api.weatherapi.com/v1/current.json?key=0b45fa96edff4157aae45943242908&q=${lat},${long}&aqi=yes`)
   return await promise.json()
}

 async function gotlocation(position){
 const result= await getData(position.coords.latitude,position.coords.longitude)
 console.log(result);
  // current_loc = await getData(position.coords.latitude,position.coords.longitude)
  // console.log(current_loc);
  


}

 function failedlocation(){
  console.log("some issue"); 
 }

loaction.addEventListener("click",async()=>{
  navigator.geolocation.getCurrentPosition(gotlocation,failedlocation)

})



 
