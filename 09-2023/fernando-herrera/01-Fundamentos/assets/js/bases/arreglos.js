const arr = new Array(10); // No se recomienda

// console.log(arr)
// console.log(typeof arr)
// console.log(arr instanceof Array)

const games = ["Mario 3", "Megaman", "Chrono Trigger"];
console.table(games);
// let index = 1;
// console.log(games[index]);

let arrThings = [
  true,
  123,
  "Miguel",
  1 + 2,
  function () {},
  () => {},
  { a: 1, b: 2 },
  ["X", "Megaman", "Zero", "Dr. Light", ["Dr. Willy", "Woodman"]],
];

// console.table(arrThings);

// console.log(arrThings[0])
// console.log(arrThings[2])
console.log("---");
console.log(arrThings[7][4][1]);
