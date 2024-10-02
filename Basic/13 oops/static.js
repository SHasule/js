
 class user{
    constructor(name,id){
        this.name=name
        this.id=id
    }
    login(){
        console.log(`user login : ${this.name}`);
    }
   static userID(){      // we can not access static property
        return 123
    }
 }
 const result= new user('sam')
 result.login()

 console.log(result.userID());
