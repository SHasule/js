

// const coding=["js","java","cpp","py"]

// coding.forEach((name)=>{
//  console.log(name );
// }) 

// // forEach has 3 parameter index and array list
// coding.forEach((name2,index,array)=>{
//  console.log(name2,index,array);
// })


// [{},{}] array in object

 // const coding2=["java","js","python"]
   let lang=[
    {
        language:"java",
        filename:".java"
    },
    {
        language:"js",
        filename:".js"
    },
    {
        language:"python",
        filename:".py"
    }
   ]
//    for (const code in lang){
//      console.log(code);
//    }
lang.forEach((value)=>{
   console.log(value.filename);
})