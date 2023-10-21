const myself = function (name, age) {
  this.name = name;
  this.age = age;

  this.aboutMyself = function () {
    console.log(`My Name is ${this.name} and Age is ${this.age}`);
  };
};
// Computer();

const me = new myself("ashfak", 17);
const fahim = new myself("fahim", 18);
console.log(me);
me.aboutMyself();
fahim.aboutMyself();

// const obj = {};

// obj.name = "ashfak";

// obj.age = 20;

// console.log(obj)

// 4 rules of Function constructor

// 1. Create an empty object {}
// 2. function is called this = {}
// 3. {} linked to the prototype
// 4. {} will return automatically
