
// falsy value=> false,0,-0,null,undefined,nan,big Int 0n,""

//truthy vavlue=> {},[],"_",function(){},"0","false"

 const useremail="y@gmail.com";

 if (useremail){
    console.log('got user gmail');
 }
  
 const myarray=[]
  if(myarray.length==0){
    console.log('array is truthy value');
  }

  const obj={}
  if (Object.keys(obj).length==0)
  {
   console.log('object is empty')
   
  }
  

  const falsy=false
  if (falsy)
  {
    console.log('true value');
  }
  else{
    console.log('false value');
  }

  