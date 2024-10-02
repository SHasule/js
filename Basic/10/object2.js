

 // const user= new Object;  // singleton object

//  const user={

//  }
//  user.name="javascript";
//  user.gmail="xyz@gmail.com"
// console.log(user);

 const Appuser={
    name:"sammy",
    mob:"777777",
    address:{ 
        state:{                                       //nasted object
             statename:"rajstan",
            city:{
                cityname:"jaypur",
                home:"sai naka"
                
            }
        }
    }
 }
 console.log(Appuser.name);
 console.log(Appuser.address.state.city.cityname);


 const n1={1:"one",2:"two"}
 const n2={3:"three",4:"four"}

 const n3=Object.assign({},n1,n2)
 console.log(n3);

 const n4={...n1,...n2};
 console.log(n4);


 console.log(Appuser);
 console.log(Object.keys(Appuser));
 console.log(Object.values(Appuser));
 console.log(Object.entries(Appuser));
 console.log(Object.hasOwnProperty("name"));