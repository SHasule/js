
// let newnum=[]
//  oldnum.filter((num)=>{
    //     if(num>2){
        //        // console.log(num);
        //        newnum.push(num+10)
        //     }
        // })
    // console.log(newnum);

        const oldnum=[1,2,3,4,5,6,7]
          let newnum=oldnum.map((num)=>{
            return num+10
         })
         console.log(newnum);

 console.log("map chaining");
         const mynum=[1,2,3,4,5]
         let AllNUM=mynum.map((num)=>num*10)
         .map((num)=>num*2)
         .filter((num)=>num>30)
console.log(AllNUM);