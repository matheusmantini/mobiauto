const updateData = require("./updateData");

const test1 = updateData(
  { name: "Marcos", country: "Brasil", age: 22 },
  { country: "Japão", age: 33 }
);
console.log(
  JSON.stringify({ name: "Marcos", country: "Brasil", age: 22 }) +
    " updated by " +
    JSON.stringify({ country: "Japão", age: 33 }) +
    " --> " +
    JSON.stringify(test1)
);

const test2 = updateData(
  { name: "Marcos", country: "Brasil", age: 22 },
  { price: 89.9, amount: 15, description: "camiseta 100% algodão" }
);
console.log(
  JSON.stringify({ name: "Marcos", country: "Brasil", age: 22 }) +
    " updated by " +
    JSON.stringify({
      price: 89.9,
      amount: 15,
      description: "camiseta 100% algodão",
    }) +
    " --> " +
    JSON.stringify(test2)
);

const test3 = updateData(
  { name: "Rafael", country: "Chile", age: 42 },
  { name: "Camiseta Polo", price: 59.9, amount: 30 }
);
console.log(
  JSON.stringify({ name: "Rafael", country: "Chile", age: 42 }) +
    " updated by " +
    JSON.stringify({ name: "Camiseta Polo", price: 59.9, amount: 30 }) +
    " --> " +
    JSON.stringify(test3)
);
