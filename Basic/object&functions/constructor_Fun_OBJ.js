
function Person(first,last){
  this.username=first
  this.lastname=last
  this.getfullname=function(){
    return this.username+ " "+this.lastname
  }
}

 const obj1= new Person("elon","musk")
 //const obj2=new Person("mukesh","ambani")
//  console.log(obj1);
//  console.log(obj2);
 
 obj1.age=20;
 console.log(obj1);

//  obj2.hello=function(){
//   console.log(`hello`);
//  }
// obj2.hello()

 console.log(obj1.getfullname());
 

 