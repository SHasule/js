
class User{
  constructor(username){
   this.username=username;
  }
  login(){
    console.log( `${this.username} just looged in`);
   
  }
}

class Teacher extends User{
  constructor(username,subject,email){
    super(username)
    this.subject=subject;
    this.email=email;
  }

  teach(){
    console.log(`${this.username} and they teach subject ${this.subject}`);  
  }
}

 const user=new User("hitesh");
 user.login()

const teacher=new Teacher("hitseh","javascript","h@gmail.com")
teacher.teach()

// teacher.login()

console.log(teacher instanceof Teacher);
