const maskify = require("./maskify");

const test1 = maskify("4556364607935616");
console.log("4556364607935616 --> ", test1);

const test2 = maskify("64607935616");
console.log("64607935616 --> ", test2);

const test3 = maskify("1");
console.log("1 --> ", test3);

const test4 = maskify('""');
console.log('"" --> ', test4);

const test5 = maskify("Skippy");
console.log("Skippy --> ", test5);

const test6 = maskify("Nanananananananananana Batman!");
console.log("Nanananananananananana Batman! --> ", test6);
