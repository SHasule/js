    //   const age1=20
    //   const age2=40;
    //   const age3=110;

    //   if(age1>age2 && age1>age3){
    //        console.log("age1 is greter");
    //       }
    //       else if(age2>age3){
    //         console.log("age2 is big");
    //       }
    //       else{
    //         console.log("age3 is big");
    //       }

    const debitcard=true;
    const creditcard=true;
    const visa=true;
    const upi=true
    if(debitcard || creditcard || visa||upi)
    {
        console.log("welcome to shopping");

        if(debitcard || creditcard && visa || upi){
            console.log("u can buy cooler");
        }
        else{
            console.log("u can buy chocolate");
        }
    }
    else{
        console.log("not accept cash");
    }

    console.log("TRUTHY and FALSY value");
    
    // falsy value  => false,0,"",-0,bigInt,null,undefined,NaN
    // TRUTHY value => " ","0","false",[],{},function(){}

const email="email.com"
if(email){
    console.log("got email");
}
else{
    console.log("don't have email");
}

const myarray=[];
if(myarray.length===0){
    console.log("array is empty");
}

const objcheck={};
if(Object.keys(objcheck).length===0){
    console.log("object is empty");
}


// nullish coalescing operator
// let val1=10?? 18;
// let val1=null?? 18;
//let val1=10?? null?? undefined ?? 18;
// let val1=null?? undefined;
// let val1=undefined?? null;


// console.log(val1);



// ++++++++ terniary operator ++++++
let price=10;
price >=12 ? console.log("10 "): console.log("12");