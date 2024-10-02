
let mydate=new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toTimeString());
// console.log(mydate.toUTCString());


// let newdate= new Date(2024,4,13,4,30,43)
// console.log(newdate.toLocaleString());

// let newdate1=new Date("2023-5-13");
// console.log(newdate1.toLocaleString());

let mytimestamp=Date.now();
// console.log(mytimestamp);
// console.log(mydate.getTime());
// console.log(Math.floor(Date.now()/1000)) 

let date=new Date()
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());

console.log(date.toLocaleString('default',{
    // weekday:"long",
    hour:"2-digit",

}));
