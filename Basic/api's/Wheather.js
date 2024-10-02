
const btn= document.getElementById("search-btn")
const inputcity=document.getElementById("input-city")

 const city=document.getElementById('city-name')
const localtime=document.getElementById("localtime")
let temp_c=document.getElementById("temp_c");

 async function getData(cityname){
   const promise= await fetch(`http://api.weatherapi.com/v1/current.json?key=0b45fa96edff4157aae45943242908&q=${cityname}&aqi=yes`)
  return await promise.json()
 }

btn.addEventListener("click",async ()=>{
  // console.log(inputcity.value);
  const value=inputcity.value;
     const result= await getData(value);
     console.log(result);
    city.innerText=`${result.location.country} ${result.location.name}-${result.location.region}`
    localtime.innerText=result.location.localtime;
    temp_c.innerText=result.current.temp_c; 
  
});

//http://api.weatherapi.com/v1/current.json?key=0b45fa96edff4157aae45943242908&q=London&aqi=yes