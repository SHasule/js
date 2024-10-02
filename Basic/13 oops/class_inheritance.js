

 class employee{
    constructor(username){
        this.username=username
    }
    login(){
        console.log(`login employee is :${this.username}`);
    }
 }
//   const name=new user('kunal')
//   console.log(name);

class manager extends employee{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password;
    }
    showUsername(){
        console.log(`manager name is :${this.username}`);
    }
    showEmail(){
        console.log(`email is : ${this.email}`);
    }
    showPassword(){
        console.log(`password is : ${this.password}`);
    }
}
 const managerdetails= new manager('alex','alex@gmail.com','123')
 console.log(managerdetails);
 console.log(managerdetails.showUsername());
  
 const employeeDetails= new employee('khabib')
 console.log(employeeDetails.login());
//  console.log(result.showPassword());
//  console.log(result.showEmail());

console.log(managerdetails.login());

