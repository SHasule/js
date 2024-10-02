function Person(){
  this.name="jeff"
 }

 Person.prototype.age=12;
  const obj1=new Person();
  console.log(obj1.age); 

Person.prototype={age:43}
const obj2=new Person()
console.log(obj2.age)