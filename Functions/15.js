

// reduce method has two parameter accumlator and currentvalue
const number =[1,2,3]

// const total=number.reduce( function(acc,curvalue){
//     console.log(`accumlator ${acc} and current value is ${curvalue}`);
//     return acc+curvalue
// },0)
// console.log(total);

const total=number.reduce((acc,curvalue)=>
   {
    console.log(`acc ${acc} and ${curvalue}`);
    
      return acc+curvalue
    },0)
    console.log(total)



    //shoppingcart
   
    const shoppingcart=[
        { course:'python',
          price:900 
        },

        { course:'java',
          price:1900 
        },

        { course:'mobile dev',
          price:2900 
        },

        { course:'js',
          price:3900 
        },

        { course:'rust',
          price:4900 
        },
    ]  

    const total1= shoppingcart.reduce((acc,item)=>(acc+item.price),0 )
    console.log(total1);