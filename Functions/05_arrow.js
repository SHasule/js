
function one(){
    let username="xyz"
  console.log(this.username);
}
// one()

const two=()=>{
    let user='xyz'
    console.log(this.user);
}
two()

//+++++++ arrow fun+++++++++++++
const add=(num1,num2) =>{
    return num1+num2
    
}
//console.log(add(2,4));

const substract =(num1,num2)=>num1-num2;
// console.log(substract(76,43));

const divide=(num1,num2)=>(num1/num2)
//console.log(divide(8,2));

//+++object written in this keyword

const object_written=()=>({username:'xyz',id:2})
 console.log(object_written())
      

