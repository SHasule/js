
const name = ['jay', 'sachin', 'paul']

const user = {
    name: 'sachin dp',
    id: 2
}

Object.prototype.suraj = function () {        // can access properties of array,object,function
    console.log(`available in evrey place `);
}

Array.prototype.sayname = function () {           // only array can access
    console.log(`can access only array`);
}

//   user.suraj();
// name.suraj()
// name.sayname()



// inheretance

//old school type using __proto__
const student = {
    name: "shyam",
    present: true,

}

const teacher = {
    name: "bhosle sir",
    present: true,
    __proto__: student
}
const collage = {
    name: "cocsit",
    city: "latur"
}

 
// teacher.__proto__ =student
// console.log(student);

//modern styntax
// Object.setPrototypeOf(collage, teacher)


// remove extra spaces from string
//  example => let string1="hey paul    "
//         output:"hey paul" length:7

  let checkingString=" heyBuddy   "
   String.prototype.removeExtraSpaces=function(){         //String function Object
    console.log(`string is : ${this} `); 
    console.log(`${this.trim().length}`);
   }
   checkingString.removeExtraSpaces();
   "cocsit collage   ".removeExtraSpaces()