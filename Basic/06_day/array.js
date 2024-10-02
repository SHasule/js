// collection of multiple item


const myarray=[0,2,1,3,4,5]
console.log(myarray[1]);


myarray.push(8);
console.log(myarray);
myarray.pop();
console.log(myarray);
console.log(myarray.push(21));
console.log(myarray.pop());


console.log(myarray.includes(0));
console.log(myarray.indexOf(2));
console.log(myarray.shift());


const newarry=myarray.join() // it change array type into string
console.log(typeof newarry); //typeof newarray is string


  // splice and slice

  let checkingArray=[1,2,3,4,5,6,7]

  const array1=checkingArray.slice(1,4)
  console.log("sliced array: ",array1);
  console.log("A :",checkingArray);

  // splice method change original array, it manipulate original array
  const array2=checkingArray.splice(1,4);
  console.log("spliced array :",array2);
  console.log("A :",checkingArray);

