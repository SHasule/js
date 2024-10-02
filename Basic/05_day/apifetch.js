

// let URL="https://cat-fact.herokuapp.com/facts";
// //  let promise=fetch(URL);
// //  console.log(promise);
// let factpara=document.querySelector("#fact")
// let btn=document.querySelector("#btn");


//  const getfacts= async()=>{
//     console.log("getting data....");
//     let response= await fetch(URL);
//     console.log(response);  //JSON format object
//        let data=  await response.json();
//       // console.log(data[0].text);
//         factpara.innerText=data[0].text;
      
   
//  }
//  btn.addEventListener("click",getfacts)

 let URL="https://cat-fact.herokuapp.com/facts";
//  let promise=fetch(URL);
//  console.log(promise);

  let fact=document.querySelector("#fact")
 let btn= document.querySelector("#btn"); 

   const getfacts = async()=>{

    let response= await fetch(URL);
    console.log(response);
    let data=await response.json();
    console.log(data[0].text);
    fact.innerText=data[0].text
   
   }
   btn.addEventListener("click",getfacts)