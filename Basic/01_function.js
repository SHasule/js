

function myname() {
    console.log('s');
    console.log('u');
    console.log('r');
    console.log('a');
    console.log('j');
}
//myname()


function addnum(a, b) {

    //     let result=a+b;
    //  return result;
    return a + b;

}
const result = addnum(2, 6);

//console.log('result',result);



function login(username = "sam") {
    // if(username===undefined)  or
    if (!username) {
        console.log("plz enter your name");
        return

    }

    return `${username} just looged in`

}

//console.log(login ('mahesh'));



