class Book {
  constructor(title, writer, page, year) {
    this.title = title;
    this.writer = writer;
    this.page = page;
    this.year = year;
  }
  getSummary() {
    return `Book Name: ${this.title} \n Writer ${this.writer} \n Pages: ${this.page} \n Publish Year: ${this.year}`;
  }

  getAge() {
    const year = new Date().getFullYear() - this.year;
    console.log(year);
  }
}

// Instantiate Object

const book1 = new Book("The Book of Paths", "Ashfak Hossain", 679, 2018);
console.log(book1.getAge());
