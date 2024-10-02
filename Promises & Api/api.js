 const url="https://cat-fact.herokuapp.com/facts";
   const factdata=document.querySelector("#fact");
   let btn=document.querySelector("#btn");


 
//  let promise=fetch(url);
//  console.log(promise);


 const getfacts=async ()=>{
  console.log("getting data...");
  let promise=await fetch(url);
  console.log(promise);

  let data=await promise.json();
  // console.log(data[0].text);
  factdata.innerText=data[1].text;
 };

 btn.addEventListener("click",getfacts)
