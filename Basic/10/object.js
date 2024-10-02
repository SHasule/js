
 const mysymbol=Symbol("champa");
const patil={
    name:"ishwar patil",
    friend:"vivek",
    email:"ishwarpatil0305@gmail.com",
    farm : 100,
  [mysymbol]:"champa1"
    
}
console.log(patil.name);
console.log(patil["friend"]);
console.log(patil.farm);
console.log ( patil[mysymbol]);

patil.friend="suraj jadhav";
console.log(patil.friend);

// Object.freeze(patil)     // after freeze we can't modify object

// patil.friend="faruk";
// console.log(patil.friend)
console.log(patil);


console.log("object function");

patil.user=function(){
    console.log(`js user ${this.name="hasule"}`);
}
console.log(patil.user());
