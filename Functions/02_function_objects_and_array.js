
 function multiple_value ( val1,val2,...num1) // ... -> rest is like spread in syntax
{
    return num1
   
}
//console.log(multiple_value(1,20,32,33));


let user= {
    name:'ram',
    id:2,
    email:'xyz@mail.com'
}
 
function handleobject (userobject){
    console.log(`${userobject.name} and id is${userobject.id}`);
}
 
//handleobject(user);

handleobject ({
    name:'kiran',
    id:10,
})

const newarray=[10,20,30];

function secondvalue(anyarray){

    return anyarray[1]
}
//  console.log(secondvalue(newarray));

console.log(secondvalue([100,299,29]));
 

