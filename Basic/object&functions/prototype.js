
 function multiple(num){
  return num*2
 }
//  multiple.add=2;
//  console.log(multiple(2));
//  console.log(multiple.add);
//  console.log(multiple.prototype);
 
 function menu(name,price){
  this.name=name,
  this.price=price
 }
  menu.prototype.increment=function(){
    return this.price+3
  }
  menu.prototype.print=function(){
    console.log(`menu is ${this.name}`); 
  }
  const chai=new menu('chai',20)
 //console.log(chai.increment());
 chai.print()
 console.log(chai.increment());
 

 
 

 