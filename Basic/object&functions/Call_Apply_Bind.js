 let tesla={
  owner:"elon musk",
  model:"cyber truck",
 }
 let facebook={
  owner:"mark zuckerberg",
  model:"fb", 
 }

 function special(){
  return(`${this.owner} has been good in market`)
}

 function codeing(lang,lang2){
  console.log(lang,lang2);
  
 }
 console.log(codeing.call(tesla,"java",'cpp'));
 
  // console.log(special.call(tesla));
  // console.log(special.call(facebook));
  
  
   









//   const microsoft={
//   owner:"bill gates"
//   }
//  console.log(special.call(microsoft));
 

//console.log(special.call(tesla));


//  function special(){
//   return(`${this.owner} has been good in market`)
// }

 // console.log(facebook.special());
//  console.log(tesla.special.call(facebook));
 