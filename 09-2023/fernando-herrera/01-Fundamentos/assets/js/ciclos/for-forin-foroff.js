const heroes = ["Batman", "Superman", "Wonderwoman", "Aquaman"];

console.warn("For tradicional");

for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

console.warn("For off");

for (const hero of heroes) {
  console.log(hero);
}

console.warn("For in");

for (const key in heroes) {
  if (Object.hasOwnProperty.call(heroes, key)) {
    console.log(heroes[key]);
  }
}
