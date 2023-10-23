const bookProtos = {
  getSummary: function () {
    console.log(
      `Book Name: ${this.title} \n Writer ${this.writer} \n Pages: ${this.pages} \n Publish Year: ${this.year}`
    );
  },

  getAge: function () {
    const year = new Date().getFullYear() - this.year;
    console.log(year);
  },
};

// Create Object

// const book1 = Object.create(bookProtos);

// book1.title = "Walking to the Dead World";
// book1.writer = "Ashfak Hossain";
// book1.page = 389;
// book1.year = 2014;

const book2 = Object.create(bookProtos, {
  title: { value: "Walking to the Beautiful World" },
  writer: { value: "Ashfak Hossain" },
  page: { value: 579 },
  year: { value: 2016 },
});

console.log(book2)