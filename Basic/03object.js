
const mysymbol=Symbol("key1")
let profile={
   email:'xyz@gmail.com',
    id:2,
   "name":'xyz',
    work:'software team',
   [mysymbol]:'key1',

}
console.log(profile);

console.log(profile.email);
console.log(profile["name"]);
console.log(typeof [mysymbol]);

console.log(profile["work"]);



profile.email='abc.gmail.com'

// Object.freeze(profile);
profile.email='pqrgmail.com'
profile.id=6
console.log(profile);

//function

profile.greeting=function(){
    console.log(`js is going on,${this.name}`);
}
console.log(profile.greeting())


