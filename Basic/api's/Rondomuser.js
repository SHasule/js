// https://randomuser.me/api/


async function randomuser(){
  try{
    const response=await fetch('https://randomuser.me/api/')
    const result=await response.json();
    console.log(result);
  }
  catch(err){
 console.log("err",err);
 
  }
  
  }
  randomuser()