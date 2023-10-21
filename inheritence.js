const Book = function (title, writer, pages, year) {
  this.title = title;
  this.writer = writer;
  this.pages = pages;
  this.year = year;
};

// getSummary
Book.prototype.getSummary = function () {
  console.log(
    `Book Name: ${this.title} \n Writer ${this.writer} \n Pages: ${this.pages} \n Publish Year: ${this.year}`
  );
};

// Magazine Constructor
function Magazine(title, writer, pages, year, month) {
  Book.call(this, title, writer, pages, year);

  this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

const mag1 = new Magazine(
  "Walking to the Library",
  "Ashfak Hossain",
  73,
  2018,
  "jun"
);

// Use Magazine Constructor

Magazine.prototype.constructor = Magazine;

console.log(mag1);
