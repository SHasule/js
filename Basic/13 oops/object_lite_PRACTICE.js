
const pradeep={
    fullname:"pradeep ghavane",
    room_no:"g4",
    frd:"RDX_nama",
    details:function(){
        console.log(` frd name :${this.frd}`)
    }
}
// console.log(pradeep.details());

function person(name,age,gender){
     this.name=name;
     this.age=age;
     this.gender=gender;
     
     return this
}
const firstPerson= new person("kiran",'10','Male')
const sec= new person("suraj",18,'male')
console.log(firstPerson);

console.log(sec instanceof Object);
