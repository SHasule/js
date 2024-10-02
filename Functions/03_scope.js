
const b = 200;
var c = 300;
if (true) {
    let a = 10;
    //  const b = 20;
    var c = 30;
    // console.log(c);
    //  console.log(b);

}

//console.log(a);
//console.log(b);
//console.log(c);



//-->nested scope

function one() {
    const name = 'suraj'
    console.log('hello');
    function two() {
        const sirname = 'hasule'
        console.log(name);
    }
    // console.log(sirname);
    two()
}
one()

if (true) {
    user = 'kiran'
    if (user === 'kiran') {
        // console.log(user);
        const user2 = 'hasule'
        console.log(user + user2);

    }
   // console.log("out of scope",user+user2);

}


//++++++++++important+++++++++++++++++
 console.log(addone(8));
function addone(num1) {
    return num1+1
}
// addone(8)


 //console.log(two(76));  --> can't initialization bcoz we store function in two variable
const two=function addtwo(num1){
  return num1+2
}

 //console.log(two(99))
