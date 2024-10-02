

let Getpromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 2000)
    })
}

let asynpromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success")
        }, 2000)
    })
}

/*
 console.log("fetchig data1...");
let result=Getpromise()
result.then((res)=>{
   console.log("fetching data2...");
   let result2=asynpromise();
   result2.then(()=>{
   })
})  */


// atcual promise chaining
//.then chaining
let result = Getpromise();
console.log("fetching...");
result.then((res) => {
    // console.log(res);
    let result2 = asynpromise();
    console.log("fetching...");
    return result2;
}).then(() => {
    console.log("...success");
})