
 const person1={
  name:"kiran",
  sirname:"hasule",
 fullname: function(city){
  console.log(` name is ${this.name} ${this.sirname},and city is ${city}`);
 }

 }
// person1.fullname("pune")

 const person2={
  name:"suraj",
  sirname:"hasule"
 }
 person1.fullname.call(person2,"latur")     // call
 person1.fullname.apply(person2,["latur"])  // apply

 let person=person1.fullname.bind(person2)  // bind
 console.log(person("mumbai"));




