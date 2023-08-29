//sestructuring

//- với array
var arr = ["js", "PHP", "Ruby"];

var [a, b, c] = arr;

console.log(a, b, c);
//với ob
var course = {
  name: "js",
  price: 1000,
  img: "image-address",
};

var { name, price } = course;

console.log(name, price);

//rest params : đại diện cho các tham số còn lại

var { name, ...newOj } = course;

console.log(newOj);
