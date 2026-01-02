// console.log("TypeScript tutorial");

import { id } from "zod/v4/locales";

// import { number } from "zod/v4";

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
// let car1: { brand: string; year: number } = {
//   brand: "toyota",
//   year: 2020,
// };

// let book = { title: "book", cost: 20 };
// let pen = { title: "pen", cost: 10 };
// let noteBook = { title: "book" };

// let items: { readonly title: string; cost?: number }[] = [book, pen, noteBook];
// items[0].title = "new book";

// let bike: { brand: string; year: number } = { brand: "kawasaki", year: 2024 };
// let laptop: { brand: string; year: number } = { brand: "Dell", year: 2021 };
// let laptop_2: { brand: string; year: number } = {
//   brand: "Toshiba",
//   year: 2018,
// };

// let product1 = { title: "shirt", price: 30 };
// let product2 = { title: "jacket" };

// let products: { title: string; price?: number }[] = [product1, product2];

//^ #==============================================FUNCTIONS=================================

// function sayHi(name: string) {
//   console.log(`hello there ${name.toUpperCase()}`);
// }

// sayHi("Ben");
// sayHi(4);

// function calculateDiscount(price: number) {
//   return price * 0.9;
// }

// const finalPrice = calculateDiscount(230);
// ============================
// const names: string[] = ["john", "jane", "jim", "jill"];

// function isNameInList(name: string): boolean {
//   return names.includes(name);
// }

// console.log(isNameInList("john"));
// let nameToCheck: string = "jane";

// if (isNameInList(nameToCheck)) {
//   console.log(`${nameToCheck} is in the list`);
// } else {
//   console.log(`${nameToCheck} is NOT in the list`);
// }
// ==============================
// function calculateFinalPrice(
//   originalPrice: number,
//   discount: number = 0
// ): number {
//   return originalPrice - discount;
// }
// =============================

// function sum(message: string, ...numbers: number[]): string {
//   const doubled = numbers.map((num) => num * 2);
//   console.log(doubled);

//   let total = numbers.reduce((previous, current) => {
//     return previous + current;
//   }, 0);
//   return `${message} ${total}`;
// }

// let result = sum("The total is:", 1, 2, 3, 4, 5); // result will be "The total is: 15"
// ==============================

// function processInput(input: string | number) {
//   if (typeof input === "number") {
//     return input * 2;
//   } else {
//     console.log(input);
//   }
// }

// console.log(processInput(2));
// console.log(processInput("soccer"));

// ==========================OBJECTS AS PARAMETERS==========================

// function createEmployee({ id }: { id: number }): {
//   id: number;
//   isActive: boolean;
// } {
//   return { id, isActive: id % 2 === 0 };
// }

// const first = createEmployee({ id: 1 });
// const second = createEmployee({ id: 4 });

// console.log(first, second);

// function createStudent(student: { id: number; name: string }): void {
//   console.log(`welcome to the course ${student.name.toUpperCase()!!!}`);
// }

// const dude1 = {
//   id: 4,
//   name: "Anna",
// };

// createStudent(dude1);

// const john: { id: number; name: string; isActive: boolean } = {
//   id: 1,
//   name: "john",
//   isActive: true,
// };
// const susan: { id: number; name: string; isActive: boolean } = {
//   id: 1,
//   name: "susan",
//   isActive: false,
// };

// function createUser(user: { id: number; name: string; isActive: boolean }): {
//   id: number;
//   name: string;
//   isActive: boolean;
// } {
//   console.log(`Hello there ${user.name.toUpperCase()} !!!`);

//   return user;
// }

// let theme: "dark" | "light" | "blue" | "green" = "blue";

// theme = "green";

// type Employee = { id: number; name: string; department: string };
// type Manager = { id: number; name: string; employees: Employee[] };

// type Staff = Employee | Manager;

// function printStaffDetails(staff: Staff): void {
//   if ("employees" in staff) {
//     console.log(
//       `${staff} is a Manager and has ${staff.employees.length} employees`
//     );
//   } else {
//     console.log(`${staff} is an employee in the ${staff.department}`);
//   }
// }

// const alice: Employee = {
//   id: 1,
//   name: "alice",
//   department: "sales",
// };

// const steve: Employee = {
//   id: 2,
//   name: "steve",
//   department: "HR",
// };

// const Bob: Manager = {
//   id: 3,
//   name: "Bobby",
//   employees: [alice, steve],
// };

// ===============================INTERFACE==================================

// interface Book {
//   readonly isbn: number;
//   title: string;
//   author: string;
//   genre?: string;
//   printAuthor(): void;
//   printTitle(message: string): string;
// }

// const deepWork: Book = {
//   isbn: 123,
//   title: "deep work",
//   author: "cal newport",
//   genre: "self-help",
//   printAuthor() {
//     console.log(this.author);
//   },
//   printTitle(message) {
//     return `${this.title} ${message}`;
//   },
// };

interface Computer {
  readonly id: number; // cannot be changed once initialized
  brand: string;
  ram: number;
  upgradeRam(increase: number): number;
  storage?: number; // optional property
}

const laptop: Computer = {
  id: 1,
  brand: "Toshiba",
  ram: 64,
  upgradeRam(amount) {
    this.ram += amount;
    return this.ram;
  },
};
