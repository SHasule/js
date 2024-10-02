const int_num= 21;

const str_val='this is js';

const boolean_value='true';

let id; //undefined
 console.log(id);
const temp=null;

let symbolval=Symbol('123'); 
console.log(typeof (symbolval));

let sym2=Symbol('123');

console.log(symbolval===sym2);

const bignum=12323333323n;// its store in BigInt
console.log(typeof(bignum));



//non-primitive data type
let array1=['kk','sk','rs']
console.log(array1);

let myobj={
    name:'kk',
    age:29,
    clg:'dccl',
}
console.log(myobj);

const fun1=function(){
    console.log('this is function');

}
console.log(fun1);