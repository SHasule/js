


const person1={
    fname:'pradeep',
    lname:'patil',
     fullname:function(city){
        return `${this.fname} ${this.lname} ${city}`
     }  
}
 console.log(person1.fullname('latur'));

const person2={
    fname:"kiran",
    lname:"hasule",

}
  console.log(person1.fullname.call(person2,'pune'));
//   let callmethod= person1.fullname.call(person2)
//  console.log(callmethod); 


//+++++++++ Apply++++++++++


const person3={
    fname:"suraj",
    lname:"yadav",
    
}=
 console.log(person1.fullname.apply(person3,["nanded","goa"]));


 //+++++++++++Bind++++++++++

 const person4={
  fname:'cocsit',
  lname:"clg"
 }
//  console.log( person1.fullname.bind(person4));
const result= person1.fullname.bind(person4,"students");
console.log(result());
  