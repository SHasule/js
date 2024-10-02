function drinks(name,price){
    this.name=name
    this.price=price

    return this
}

console.log(drinks.prototype);      // it create {} empty object
 
   drinks.prototype.print=function (){
     console.log(`${this.price}`);
   }

 
const cocacola= new drinks("coca",40)
const tea= new drinks("tea",10)

 cocacola.print()
 tea.print()
