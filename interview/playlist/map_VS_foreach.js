
 let data=[8,3,3,2,1,3]
  let map_Num=data.map((i)=>{
 return i+2
  })
  console.log(map_Num);
  console.log(data);
 console.log("+++");

  let forResult=data.forEach((arr,i)=>{
    arr=i+4
  })
console.log(forResult,data);