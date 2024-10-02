


// function add(n1,n2){
//     console.log(n1+n2);
// }
// add(1,2)

//    const num=(n1,n2)=>{
//       console.log(n1+n2);
//    }
//    num(2,3)

//    const user1=
//    {
//     id:2,
//     name:"java"
//    }
//    function handleobj (anyuser){
//     console.log(`${anyuser.id}`);

//    }
//    console.log(handleobj(user1));

    
   function multivalue(...num1){  //+++++++++ ...rest operator++++

    return num1;
   }
 console.log(multivalue(1,2,3,3));

 const user=[10,202,30]
   const value=(anyuser)=>{
    return value[1];

   }
   console.log(value(user));

   const obj4=()=>(
    {
        city:"latur",
        class:"ltr soft"

    }
   )
   console.log(obj4());