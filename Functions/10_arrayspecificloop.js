

//10_arrayspecificloop.

  //forof loop

   let j=[1,2,3,4,5]
  for( const value of j)
  {
    console.log(`value is ${value}`);
  }

//    let obj1={
//                 name:'xyz',
//                  id:2
//              }
//     for(const value of obj1)  {
//         console.log(`objcet is ${value}`);

//     }     

let str1='hello world'
 
for(const name of str1)
{
      
 //   console.log(name);
}


//++++++++++  MAP  +++++++++++

 let map= new Map()
 map.set('1','mango')
 map.set('2','banana')
 map.set('3','apple')
 map.set('3','apple')
  // console.log(map);

  for(const [key,value] of map){
    console.log(key ,':-',value);
  }

   