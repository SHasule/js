function api(){
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
         console.log("data got");
         resolve(200)
       }, 2000);
    })
}
  (async function (){
  await api() //1st call
  await api() //2nd call
})();
