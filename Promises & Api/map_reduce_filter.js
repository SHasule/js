 
//  let student={
//      id:1,  name:"kiarn",
//      id:2, name:"ram",
//      id:3, name:"kd"
//  }

//  console.log(student);

  
let array=[1,2,3,4]
 
//    let a=  array.forEach((item)=>{
//     console.log(item);
//      })
//  console.log(a);
 
//   let b= array.filter((num)=>{
//     return num>=2
//  })
//     console.log(b);

let b=array.forEach((item)=>{
    if(item>=2){
        console.log(item);
        //array.push(item)
    }
})
console.log(b);


const std=[
    {
      id:2,
      name:"kiran"
    },
    {
        id:3,
     name:"pooja"

    }
]

 // let std1=  std.filter((item)=>item.id===2)
//   console.log(std1);

  std1=std.filter((item)=>{
    return item.id===2||item.name==="pooja"
  })
 // console.log(std1);

   const chaining=[1,2,3,4,5,6]
   let calculate=chaining.map((num)=>num*2).map((num)=>num*2).filter((num)=>num>=4)
   //console.log(calculate);

   
   // reduce


   const num=[1,2,3,4]
   const myval=num.reduce((acc,curval)=>{
    console.log(`acc ${acc} and curval ${curval}`);
    
 //   return acc+curval

   },0)
  // console.log(myval);


   //shopcart

   const shopcart=[
    {
        price:100,
        course:"php"
    },
    {
        price:211,
        course:'python'
    }
   ]
   const total=shopcart.reduce((acc,item)=>{
    return acc+item.price
   },0)
   console.log(`ypur total bill is ${total}`);