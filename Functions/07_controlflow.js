

const debitcard=true;
const email=false;
const score=1000;
 
 if(debitcard&&email){
    console.log('user can  login');
 }
// if(score>=288){
//     console.log('score is less than 1000');

//  }
//   if (score>10)
//   {
//     const name='mango'
//     console.log(`${name} is sweet`);
//   }
  // else(score>12)
  // {
  //   console.log('else block');
  // }

//++++++++++++++switch+++++++++
     
 switch(month=4)
 {
  case 1:
    console.log('month is jan');
    break;

    case 2:
      console.log('month is feb');
      break;
    case 3:
      console.log('month is march');
      break;
    case 4:
      console.log('month is april');
      break;

      default:
        console.log('enter valid value');
 }



 // nullish coalescing operator(??):null ,underfined
 

 let val1;
  val1 =4??3;
  console.log(val1);

   let val2=null??21;
   console.log(val2);

    let var3= null??undefined// it prefer secnod value
    console.log(var3);

    // terniary operator
    // condition ?  true  :  false

    const  price=100;
     // price ==100 ?console.log('price is 100') : console.log('less or greter than 100');

     const people=2;
     people>=1 ? console.log('people is right') :console.log('not right');