
let myarray=['tomato','potato','mango','apple']

//    myarray.forEach( function (item){
//     console.log(myarray);
//    })

 // with arrow function =>
   
  /*myarray.forEach( (item)=>{
    console.log(myarray);

  }) */

  
/*
function printme(item){
    console.log(item);
}
myarray.forEach((printme))
*/

   

//++++  in forEach we can paas index, array parameter 
//    myarray.forEach( (item,index,array)=>{
//     console.log(item,index,array);

//    })


   //+++++ [{},{},{}] multiple objects in array

     let coding=[
        {
            language:'java',
            file:'javfile'
        },
        {
            language:'python',
            file:'python.py'
        },
        {
            language:'c++',
            file:'cppfile'
        },
     ]
   coding.forEach( (item)=>{
    console.log(item.language);

   }
   )  