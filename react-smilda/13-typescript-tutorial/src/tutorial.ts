// console.log("TypeScript tutorial");

// let awesomeName = "shakeAndBake";

// awesomeName = awesomeName.toUpperCase();
// console.log(awesomeName);

// let amount: number = 20;
// amount = amount += 2;
// console.log(amount);
// let isPresent = false;

//^ #==============================================UNION TYPES--EITHER OR=================================
// let tax: number | string = 10;
// tax = 100;
// tax = "cow";
// tax = false;

// let requestStatus: "pending" | "success" | "error" = "pending";
// requestStatus = "goat";
// requestStatus = "error";
//^ #==============================================TYPES ANY--=================================
// let notSure: any = 4;
// notSure = "pig";
// notSure = true;

//^ #==============================================TYPES ANY--=================================

// const books = ["1984", "Brave", "Degree"];
// let foundBook: string | undefined;

// for (let book of books) {
//   if (book === "1984") {
//     foundBook = book;
//     break;
//   }
// }
// foundBook?.length;
// console.log(foundBook);

// let discount: number | string = 20;
// discount = "20";

// let orderStatus: "processing" | "shipped" | "delivered";
// orderStatus = "shipped";

//^ #==============================================ARRAYS AND OBJECTS=================================
// let prices: number[] = [100, 75, 45, "hello"];
// prices.push("hello");

// let fruit: string[] = ["apple", "orange"];

// let empty: number[] | string[] = [];
// let empty2: (number | string)[] = [];

// empty.push("cow")

// let temp: number[] = [20, 49, 30, 21];
// // temp.push("ten");

// let colors: string[] = ["red", "green", "blue"];

// let mixed: (number | string)[] = [1, "two"];

// let car: { brand: string; year: number } = {
//   brand: "toyota",
//   year: 2020,
//   color: "blue",
// };
let car1: { brand: string; year: number } = {
  brand: "toyota",
  year: 2020,
};

let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 10 };
let noteBook = { title: "book" };

let items = [];
