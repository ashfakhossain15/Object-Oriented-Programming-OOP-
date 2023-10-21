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

const Book = function (title, writer, pages, year) {
  this.title = title;
  this.writer = writer;
  this.pages = pages;
  this.year = year;
};
Book.prototype.getSummary = function () {
  console.log(
    `Book Name: ${this.title} \n Writer ${this.writer} \n Pages: ${this.pages} \n Publish Year: ${this.year}`
  );
};

Book.prototype.getAge = function () {
  const year = new Date().getFullYear() - this.year;
  console.log(year);
};

const book1 = new Book("Walk For Better Heart", "Ashfak Hossain", 70, 2016);
const book2 = new Book("Walk For Better ", "Ashfak Hossain", 70, 2022);

console.log(book1);

book1.getAge();
