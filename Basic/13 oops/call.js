
function firstuser(username){
    this.username=username
    console.log("called");
}

function secnoduser(username,password){
  firstuser.call(this,username)       //this => used for bring exection context from firstuser
    this.password=password
}
 const user= new secnoduser('javascript','1123')
 console.log(user);
