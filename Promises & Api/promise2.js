
 let mypromise = new Promise(function(resolve,reject){
    // alert("this is promise")
    // resolve(20)
    //alert("promise");
   // resolve(56)
   
     console.log("in promise");
 })



console.log('hello');
  setTimeout(function(){
    console.log("inside settimeout");
  },2000);



console.log("this is js");
console.log(mypromise);