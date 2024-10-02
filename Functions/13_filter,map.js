

const coding = ['java', 'python', 'c++']

const language = coding.forEach((item) => {
  //  console.log(item);
})
//console.log(language);       return undefined

const newnum1 = [1, 2, 3, 4, 5, 6, 7, 8]
const n = newnum1.filter((num1) => num1 > 4)
console.log(n);


newnum1.forEach( (num)=>{
    if(num>4){
  //     console.log(num);

    }
})



const books = [
    {
        name: 'one', subject: 'history', publish: 2024,
    },
    {
        name: 'three', subject: 'marathi', publish: 1999,
    },
    {
        name: 'two', subject: 'history', publish: 2010,
    },
    {
        name: 'four', subject: 'math', publish: 2019,
    },
    {
        name: 'five', subject: 'english', publish: 1990,
    },
    {
        name: 'six', subject: 'science', publish: 1999,
    },
]

// let menu = books.filter((bk) => bk.name == 'four')
// console.log(menu);

// menu = books.filter((bk) => {
//    return bk.subject == 'history'&&bk.publish>=1090
// })
// console.log(menu);




