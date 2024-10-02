
 const fruits=["mango","orange","papaya","apple"];

 const veggi=["potato","onion","tomato","chilies"]

 
//    fruits.push(veggi)                   //push method add array on same array / exiting array
//    console.log(fruits);
 
   console.log("concat method");          // concat method returns new array , murg array properly
     const types= fruits.concat(veggi)
 console.log(types);


 console.log("spread operator");

 const spreadarray=[...fruits,...veggi]
 console.log(spreadarray);


 console.log("flat method");               // flat convert array in all array, in single array
 const complex_Array=[10,23,54,[32,44,[54,52]]]

 let converted_Array=complex_Array.flat(Infinity);
 console.log(converted_Array);

 console.log("from array");
let name="javascript"         // from  break array in single element 
console.log(Array.isArray("helo"));      
console.log(Array.from(name));

console.log(Array.from("suraj"));   // from can convert element to array
 console.log(Array.from({name : "hey"})); // it convert [] empty array
 

 console.log("of method");
 let s=100;
 let s3=200;
 let s2=300;      

 // return new array from set element
 console.log(Array.of(s,s2,s3));



//