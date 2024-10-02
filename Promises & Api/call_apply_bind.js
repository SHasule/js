
 let person1={
    name:"kiran",
    age:22,

    // additional:function(){
    // console.log(`${this.name} and his age is ${this.age}`);
    // }
 }
   console.log(person1);
  // person1.additional()

   let person2={
    name:"suraj",
    age:21, 
   }
   
  let additional=function(city,spt){
    console.log(`${this.name} and his age is ${this.age} ${this.city},${this.spt}`);
    }


// function bowwroing

 //  person1.additional.call(person2)

//  additional.apply(person1,['pune','cricket'])

  let bindf= additional.bind(person1,"pune","cricket")
  console.log(bindf());




