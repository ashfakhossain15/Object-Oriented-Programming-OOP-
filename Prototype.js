const Myself = function (name, age) {
  this.name = name;
  this.age = age;

  //   this.aboutMyself = function () {
  //     console.log(`My Name is ${this.name} and Age is ${this.age}`);
  //   };
};

Myself.prototype.aboutMyself = function () {
      console.log(`My Name is ${this.name} and Age is ${this.age}`);
};
 
const me = new Myself("ashfak", 17);
const fahim = new Myself("fahim", 18);
// console.log(me); 
// me.aboutMyself();
// fahim.aboutMyself();



Array.prototype.filter
