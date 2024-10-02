
let myarray1=['ramdas','punda','hasule']
let myarray2=['yeda','tatya','bidi']

myarray1.push(myarray2)
console.log(myarray1);

let myarray3=myarray1.concat(myarray2)
console.log(myarray3);

let myarray4=[...myarray1,...myarray2]
console.log(myarray4[2]);

let flatarray=[1,2,[2,5,6],[3,9,[3,4]]]
let realarray=flatarray.flat(2)
console.log(realarray);


console.log (Array.isArray('kiran'))
console.log (Array.from('kiran'))
console.log (Array.of('ram'))


let score1=10;
let score2=20;
let score3=30;
console.log(Array.of(score1,score2,score3));
