
  let mynum=[1,2,3,4,5,6,7]
//   let newnum= mynum.filter((num)=>{
//     return num>4
  
//   })
//   console.log(newnum);


let newnum=[]
 mynum.forEach((num)=>{
  if(num>4){
     // console.log(num);
     newnum.push(num)
  }
 })
 console.log(newnum);

  let Allbooks=[
    { title:"history",name:"shivaji",publish:1999
    },
    { title:"marathi",name:"poem",publish:1990
    },
    { title:"math",name:"math",publish:2000
    },
    { title:"history",name:"hitler",publish:1999
    },
    { title:"marathi",name:"sparrow",publish:1999
    }
  ]

    
   let books=Allbooks.filter((bk)=>{
    return bk.title==="history"
   })
   console.log(books);

    books=Allbooks.filter((bk)=>bk.name==="math")
   console.log(books);

    books=Allbooks.filter((bk)=>{
      return bk.publish>1999
   })
   console.log(books);