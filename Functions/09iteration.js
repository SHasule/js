

//09iteration.js

for (i = 0; i <= 10; i++) {


  if (i == 5) {
    //      console.log('5 is best');
  }
  // console.log(i);

}


for (i = 1; i <= 10; i++) {
  // console.log(`outer loop value${i}`);

  for (j = 1; j <= 10; j++) {
    // console.log(`inner lop value${j} and value of ${i}`);
    //console.log(i+'*'+j +'=' +j*i);
  }
}


const myarray = ['marval', 'batman', 'iron-man']

for (i = 0; i < myarray.length; i++) {
  //console.log(myarray[i]);
}

//break

//   for(i=0;i<=13;i++)
//   {
//     if(i==5)
//     {
//         console.log('5 is detected');
//         break;
//     }
//     console.log(i);
//   }


//continue
for (i = 0; i <= 13; i++) {
  if (i == 5) {
   // console.log('5 is detected');
    continue;
  }
 // console.log(i);
}

// while loop



   let index=0;
   while(index<=10)
   {
    //console.log(`the value is ${index}`);
    index=index+2;
   }


   let  myarr=['one','two','three']

   let arr=0
   while(myarr.length>arr){
   // console.log(`array is ${myarr[arr]}`);
    arr++
   }

 
   let score=1

     do
     {
    console.log(`score is${score}`);
    score=score+2;
     }
     while(score<10)
     