const sum = (a, b) => a + b;
console.log(sum(2, 4));

const course = {
  name: "javascript basic",
  getName: function () {
    return this.name;
  },
};
console.log(course.getName());

//arrow function khoong  sử dụng được contructor
