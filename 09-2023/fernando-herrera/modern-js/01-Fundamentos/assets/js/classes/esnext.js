class Square {
  // private prop with # at start
  #area = 0;

  constructor(base, height) {
    this.base = base;
    this.height = height;

    this.#area = base * height;
  }

  doubleArea() {
    console.log(this.#area * 2);
  }
}

const square = new Square(10, 15);
// square.#area = 100; // No es recomendado modificar la clase

console.log(square);

square.doubleArea();
