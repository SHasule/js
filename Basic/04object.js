
// const user1=new Object() --> literals

const user1 = {

}
user1.email = 'xyz.com';
user1.id = 2;
user1.name = 'xyz'
//console.log(user1);

const newuser = {
    email: 'abc.com',
    fullname: {
        userfullname: {
            firstname: 'abc',
            lastname: 'pqr'
        }
    }
}
// console.log(newuser.fullname);

const obj1 = { 1: 'a', 2: 'b' }
const obj2 = { 3: 'd', 4: 'c' }
const obj3 = { 6: 'x', 5: 'y' }

let obj5 = Object.assign({}, obj1, obj2)
// console.log(obj5);

let obj4 = { ...obj1, ...obj3 }
// console.log(obj4);


const user2 = [
    {
        id:1,
        name:'someone'
    },
    {
        id:1,
        name:'someone'
    },
    {
        id:1,
        name:'someone'
    }
]


console.log(user2[1].id);

// console.log(user1);
// console.log(Object.keys(user1));
// console.log(Object.values(user1));
// console.log(Object.entries(user1));

console.log(user1.hasOwnProperty('id'));