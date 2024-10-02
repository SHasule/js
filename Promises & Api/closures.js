
//closures.js

var sum = function (a) {

    console.log("hello" + 2);
    c = 20
    return function (b) {
        b = 2
        return a + b + c
    }
}
// var store= sum(2)
//  console.log(store());


const sum1 = function(a,b,c)
   {
    return{
        sumtwo:function(){
            return a+b+c
        },
        sumthree:function(){
           return a+b
        }

    }
    }

    let store= sum1(1,2,3)
    console.log(store.sumtwo());
   console.log(store.sumthree());
