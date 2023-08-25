//object
let myInfor = {
  name: "dannhu",
  age: 23,
  address: "ho chi minh,vn",
};
console.log(myInfor);

// add key: value
myInfor.email = "dannhu2803@gmail.com";

//delete ket:value
delete myInfor.age;

// object constructor

function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

//object prototype
User.prototype.className = "F8";

let author = new User("tran", "nhu", "avatar");
let user2 = new User("vu", "nguyen", "avatar");

author.tite = "Chia se dao tai f8";
user2.comment = "lieu co khoa asp.net ";
console.log(author.getName());
console.log(user2);

//doi truong date

let date = new Date();

let year = date.getFullYear();
console.log(year);
console.log(date);

//polyfill
