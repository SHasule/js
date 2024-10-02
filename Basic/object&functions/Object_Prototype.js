function Person(Fname,Lname){
  this.firstname=Fname,
  this.lastname=Lname
}
Person.prototype.gender="male"
Person.prototype.fullname=function(){
  return this.firstname+ " "+this.lastname
}

 
const obj1=new Person('jhon','cena')
const obj2=new Person('the','rock')
console.log(obj1.fullname())
console.log(obj1,obj2);
console.log(obj1.gender);
