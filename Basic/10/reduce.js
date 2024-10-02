

// reduce has two parameters accumlator and currentvalue

 let mynumbers=[2,4,6,8]

 let newnumbers= mynumbers.reduce((acc,currentvalue)=> 
    { 
        console.log(`acc:${acc} and currentvalue: ${currentvalue}`);
        return acc+ currentvalue
    },0)
    console.log(newnumbers);                




    let course=[
        {
            coursename:' frontend_dev',
            price:299
        },
        {
            coursename:'backend dev',
            price:299
        },
        {
            coursename:'mobile dev',
            price:1299
        },
        
        {
            coursename:'fullsatack dev',
            price:499
        }
    ]
    
    let totalprice=course.reduce((rate,item)=>{
        return  rate+item.price
    },0)
    console.log(totalprice);