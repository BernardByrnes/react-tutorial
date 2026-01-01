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
let notSure: any = 4;
notSure = "pig";
notSure = true;
