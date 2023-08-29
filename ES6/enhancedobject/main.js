var name = "javascript";
var price = "1000";

const course = {
  //định nghĩa key:value cho ob
  name,
  price,
  //định nghĩa method cho ob
  getName() {
    return name;
  },
};

console.log(course);

console.log(course.getName());

// định nghĩa key cho ob dưới dang key:value

var feilName = "name";
var feilPrice = "price";

const course1 = {
  [feilName]: "javascript",
  [feilPrice]: 1000,
};

console.log(course1);
