// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }
  
//   // This will return "John Doe":
//   person.fullName.call(person1);


const person1={
    name:"suraj",
    lname:"hasule"
}
const person2={
    name:"kiran",
    lname:"hasule"
}
const person={
    fullname:function(city,email){
        console.log(`fullname is : ${this.name} ${this.lname} `);
        console.log(`city is: ${city} , email : ${email}`);
    }
}
//person.fullname.call(person2,'latur','kiran@gmail.com')
// person.fullname.call(person1,'pune','suraj@gmail.com')
// person.fullname.apply(person1,['pune','@gmail.com'])

 const bind_Person=person.fullname.bind(person1,'mumbai','suraj@gmail.com')
 console.log(bind_Person());