

const number=[1,3,4,5]
// let a=number.indexOf(3)
console.log(number.indexOf(3));

 //find()
 const num1=[2,3,4,5,6]
 let a=num1.find((num)=>{
    //   num==num1;
    return num%2==0;
   

 })
 console.log("find method:",(a));

 //filter
 const filter=num1.filter((f)=>{
   return f%2==0;
 })
 console.log("filter :",(filter));


 //slice
 const name=['a','b','c','d']
 console.log(name.slice(1,3));


 // push
 
 let n1=[2,3,4,5]
  n1.push(1,3);
  console.log(n1);
//concat

  let n2=[1,2,3];
  let add=n2.concat(4,8)
  console.log(add);
  console.log(n2);

  //pop()
  let n3=[3,4,4,5,5]
   popped=n3.pop() 
   console.log(popped);
   console.log(n3);

   //shift
   let shifted=n3.shift()
   console.log(n3);
    
   //unshift
   n3.unshift(8)
   console.log(n3);
  
   //splice method  -->add,remove,replace 
   
   console.log("splice method"); //add
   let letters=['a','c','b','d']
   letters.splice(1,0,'x','y')
   console.log(letters);

  letters.splice(1,3) //remove
  console.log(letters);

  letters.splice(2,1,'p') ///replace
  console.log(letters);

