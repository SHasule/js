

const array=[22,33,44]
console.log(...array); //spread element 

 const array1=[1,2,3,4]
 const copyarray=[...array1];
 console.log(copyarray);  // copying array 

  const array2=[8,3,4,6];
  const mergedArray=[...array1,...array2]
  console.log(mergedArray); //merg two array

 const array3=[9,3,4,5,8];
  sum(...array3)          // passing multiple argument to function
  function sum(a,b,c,d,e){
      console.log(a+b+c+d+e);  
  }
  

   let name="rohan"; // spread string
   console.log(...name);

    const obj1={
        id:98,
        name:"suresh",
        school:"vvhigh"
    }
  console.log(obj1.id);
  


  //+++++++++++ rest operator
  console.log("rest operator");
  
  function number(one,two,...remainingAll){
    console.log(one);
    
    console.log(two);
    console.log(remainingAll);
  }
  number(1,3,4,5,6,6,7);

 


  