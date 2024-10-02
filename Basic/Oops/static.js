class User {
  constructor(username) {
    this.username = username;
  }
  login() {
    return `${this.username} just logged is`;
  }
  userId() {
    return `user id is : 1002`;
  }
}

class Owner extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
 static Owner_email() {
    return ` owner email: ${this.email} `;
  }
}

const user = new User("shubham");
console.log(user.login());

const owner = new Owner("jhon", "jhon@gmail.com");
// console.log(owner.Owner_email());
console.log(owner);

