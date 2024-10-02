

class user{
    constructor(username,password){
        this.password=password;
        this.username=username;
    }
    encrytPassword(){
        return`${this.password} :-this is password`
    }
    changeUsername(){
         return `${this.username.toUpperCase()} :-this is username`
    }
}
 const pass=new user("shailesh",121)
 console.log(pass.encrytPassword());

 console.log(pass.changeUsername());