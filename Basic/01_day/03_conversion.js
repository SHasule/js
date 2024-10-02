


let score=1;
console.log(typeof score);

let b="12"
console.log(typeof b);
 
 let convertnum=Number(b)
 console.log( convertnum+score);

  let num2="12abc"
  console.log(typeof num2);
  let convertnum2=Number(num2)
  console.log(typeof convertnum);//Number
  console.log(convertnum2);  //NaN

  let num3=null
  let convertnum3=Number(num3)
  console.log(num3);// null
  console.log(convertnum3); // output will be zero (0)

   let num4=undefined
   console.log(num4);
   let convertnum4=Number(num4);
    console.log( typeof convertnum4);

    let num5=true;
    console.log( num5);
     if(num5==1){
        console.log("boolean true have value 1");
     }

     else{
        console.log("not value");
     }


     let num6=1;
     let s1='';
     let convertnum6=Boolean(num6)
     let converts1=Boolean(s1)
     console.table([convertnum6,converts1]);
    
     // if you convert boolean 
    //   1 => true
    //   0 =>false
    //   ""=>false
    //   "abc"=>true