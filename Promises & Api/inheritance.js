

// inheritance.js

class user{
    constructor(username){
        this.username=username;
    }
    login(){
        console.log("user logeed in");
          return`${this.username}`

    }
}
  class teacher extends user
  {
    constructor(username,password){
        super(username);
        this.password=password;
       
    }
    course(){
        console.log(`new course added by ${this.username}`);
    }
  }

  const result=new teacher("kadam","123")
  result.course()
  result.login()
  