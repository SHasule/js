

let heros=["thor",'spider']

 let heropower={
     thor:"hammer",
     spiderman:"jali",
     avengers:function(){
      console.log(` ${this.spiderman} is power of spiderman`);  
     }
 }
 console.log(heropower.avengers());

   Object.prototype.maggie=function(){
    console.log("maggie is avialable in all places");
   }

  //  heropower.maggie()
  //  heros.maggie()
  
  Array.prototype.heyElon=function(){
    console.log(`elon avialable in array`);  
  }
  heros.heyElon()

 