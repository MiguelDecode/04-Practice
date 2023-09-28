const bigger = (a, b) => (a > b ? a : b);

const isMember = (member) => (member ? "2 Dólares" : "10 Dólares");

console.log(bigger(20, 15));

console.log(isMember(true));

const isFriend = false;
const friends = [
  "Peter",
  "Tony",
  "Dr. Strange",
  isFriend ? "Thor" : "Loki",
  (() => "Nick Fury")(),
  bigger(23, 89),
];

console.log(friends);

const note = 85; // A+, A, B+,...

const grade =
  note >= 95
    ? "A+"
    : note >= 90
    ? "A"
    : note >= 85
    ? "B+"
    : note >= 80
    ? "B"
    : note >= 75
    ? "C+"
    : note >= 70
    ? "C"
    : "F";

console.log(note, grade)

