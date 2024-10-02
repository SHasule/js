
function showpromise(text){
  return new Promise((reslove,reject)=>{
    setTimeout(()=>{
      console.log("hello");
      reslove(text)
    },1000)
  })
}
// showpromise

Promise.all([
  showpromise(),
  Promise.reslove("world")
])