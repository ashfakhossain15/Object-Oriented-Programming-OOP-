// const s1 = "hello";
// console.log(typeof s1);

// const s2 =new String("hello-2");
// console.log(typeof s2);

// console.log(window);

// window.alert("Your are Not an user")
// alert("Your are Not an user")

// console.log(navigator)

const book1 = {
  title: "Walk for good Health",
  writer: "Ashfak Hossain",
  year: 2023,
  pages: 798,

  getSummary: function () {
    return `${this.title} was written by ${this.writer} on ${this.year} `;
  },
};
console.log(book1.getSummary());

const book2 = {
  title: "Walk for Bad Health",
  writer: "Ashfak Hossain", 
  year: 2024,
  pages: 788,

  getSummary: function () {
    return `${this.title} was written by ${this.writer} on ${this.year} `;
  },
};
console.log(book2.getSummary());

console.log(Object.values(book2));
console.log(Object.keys(book2));
