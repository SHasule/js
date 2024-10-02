
let mydate=new Date();
//console.log(mydate);
// console.log("to string :",mydate.toString());
// console.log("datestring: ",mydate.toDateString());
// console.log("ISOString: ",mydate.toISOString());
// console.log("json : ",mydate.toJSON());
// console.log("toLoaclstring : ",mydate.toLocaleString());

let createdDate= new Date( 2023,0,24,5,3,5)
console.log(createdDate.toLocaleString());

let createdDate2=new Date("2024-04-03");
console.log(createdDate2.toLocaleString());


console.log(Math.round(Date.now()/1000));

let currDate=new Date();
console.log(currDate.getMonth()+1);
console.log(currDate.getDate());
console.log(currDate.getFullYear());
console.log(currDate.getHours());
console.log(currDate.getDay());


