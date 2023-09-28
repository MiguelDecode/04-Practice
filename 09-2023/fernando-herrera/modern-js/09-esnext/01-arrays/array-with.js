const state = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "Superman",
  },
  {
    id: 3,
    name: "Flash",
  },
  {
    id: 4,
    name: "Aquaman",
  },
];

const index = 1;
const newName = "Green Lantern";

const newState = state.with(index, { ...state.at(index), name: newName });

/* const newState = state.map((hero, i) => {
  if (i === index) {
    hero.name = newName;
  }

  return hero;
  // return { ...hero };
}); */

state[0].name = "Thor";

console.table(state);
console.table(newState);
