


let name1='latur';

let name2=name1;

name2='jamb';
console.log(name1);//value stored in stack memory
console.log(name2);

let use1 ={
    id:2,
    name:'sushant',
    con_num:2223,

}

let use2=use1; //object stored in heap memory

use2.id=3;
console.log(use1);
console.log(use2);