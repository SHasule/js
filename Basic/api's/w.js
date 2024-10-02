 const btn=document.getElementById("search-city")
 const enter_city=document.getElementById("enter-city")
 const cityname=document.getElementById("cityname");
 const localtime=document.getElementById("localtime")
 const temp_c=document.getElementById("temp");

 
  async function data(cityname){
    const promise= await fetch(`http://api.weatherapi.com/v1/current.json?key=0b45fa96edff4157aae45943242908&q=${cityname}&aqi=yes`)
    return await promise.json();
  }

  btn.addEventListener("click", async()=>{
    const result=enter_city.value  
   // console.log(result);

    const value= await data(result);
    console.log(value);
    cityname.innerText=`${value.location.country} ${value.location.name}-${value.location.region}`
    localtime.innerText=`${value.location.localtime}`
    temp_c.innerText=value.current.temp_c;
    
    
  })