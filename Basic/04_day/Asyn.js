

// function hello(){
//     console.log("hello");
// };
// setTimeout(hello,2000)

//  let age=28;
//  if(age>=27){
//     if(age>=43)
//         {
//             console.log("senior");
//         }
//         else{
//             console.log("junior");
//         }
//  }
// else{
//  console.log("child");
// }

// callback hell


// function getData(dataId){
//  //console.log("id",dataId);t
//  setTimeout(() => {
//     console.log("id",dataId);
//  }, 2000);
// }

function getData(dataId, nextData) {
    setTimeout(() => {
        console.log("ID", dataId);
        if (nextData) {
            nextData();
        }
    }, 2000)
}

getData(1, () => {
    console.log("loading...");
    getData(2,()=>{

    });
});
//getData(3);

