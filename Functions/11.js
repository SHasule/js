
const obj1 = {
    name:'suraj',
    id:2,
    class:'mca'
}

 for (const key in obj1)
   {
    //console.log(obj1[key]);
    console.log(`key is ${key} and value is ${obj1[key]}`);
   }


   myarray=[1,2,3,4,5]
   for (const key in myarray) { 
   // console.log(`${key} and value is ${myarray[key]}`);  
   }

   //+++ on map  forin loop+++
     let map=new Map()
     map.set('1','pqr')
     map.set('2','xyz')

     for(const key in map)
     {
      console.log(`${key}`);
     }
   