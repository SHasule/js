
//  let person1={
//   fname:"elon",
//   lname:"musk"
//  }

//  function getName(city1){
//   console.log(`${this.fname} ${this.lname} lived in ${city1} `);
//  }

//   let bindMethod=getName.bind(person1)
//   bindMethod("pune")
  // let cities=["pune","mumbai"]
  // getName.apply(person1,cities)


  let person1={
    name:"suraj",
    lname:'hasule',

  }

  let person2={
    name:"kiran",
    lname:"hasule"
  }

  function fullname(city){
    console.log(`${this.lname} ${this.name} loves ${city}`);  
  }
  console.log(fullname.call(person1,"pune"));
  
  // console.log(person1.fullname.call(person2));
  
// console.log(person1);
