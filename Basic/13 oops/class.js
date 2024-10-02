 
  class user{
    constructor(username,gmail,password){
        this.username=username
        this.password=password
        this.gmail=gmail
    }
    addPassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
  }
  const result= new user('jack','jack@gmail.com','123')
  console.log(result);
   console.log(result.addPassword());
   console.log(result.changeusername());