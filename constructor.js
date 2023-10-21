const Book = function (title, writer, pages, year) {
  this.title = title;
  this.writer = writer;
  this.pages = pages;
  this.year = year;
  this.getSummary = function () {
    console.log(
      `Book Name ${this.title} , this Book written By ${this.writer} And published year ${this.year}`
    );
  };
};

const book1 = new Book("Walk For Better Heart", "Ashfak Hossain", 70, 2023);
const book2 = new Book("Walk For Better ", "Ashfak Hossain", 70, 2023);

console.log(book1);

book1.getSummary();
