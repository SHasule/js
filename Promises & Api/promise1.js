
let a=10;
let b=20;
let c=a+b;
 
 
               async function data(){
                    let resultfromserver= await fetch("https://jsonplaceholder.typicode.com/posts");
                    console.log( await resultfromserver.json());

                 }
                 data();

               console.log(c);
               fetch("https://jsonplaceholder.typicode.com/posts")
               .then(()=>{}).
               catch((error)=>{console.log(error)}).
               finally(()=>{})



