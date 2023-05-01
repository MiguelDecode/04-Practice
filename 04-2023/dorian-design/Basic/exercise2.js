class Book {
  constructor({ title, author, year, genre }) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;

    this.validateTitle(title);
    this.validateAuthor(author);
    this.validateYear(year);
    this.validateGenres(genre);
  }

  info() {
    return console.log(
      `El libro ${this.title} del autor ${this.author} y del año ${this.year} es del género ${this.genre}`
    );
  }

  validateString(prop) {
    if (typeof prop !== "string")
      return console.warn("No has introducido un tipo de dato válido");
  }

  validateNoEmpty(prop) {
    if (!prop) return console.warn("No has introducido ningún valor");
  }

  validateTitle(title) {
    this.validateNoEmpty(title);

    this.validateString(title);
  }

  validateAuthor(author) {
    this.validateNoEmpty(author);

    this.validateString(author);
  }

  validateYear(year) {
    this.validateNoEmpty(year);

    if (typeof year !== "number")
      return console.warn("No has introducido un tipo de dato válido");

    if (!/^([0-9]){4}$/.test(year))
      return console.warn("No has introducido un año válido de cuatro dígitos");
  }

  validateGenres(genre) {
    let genres = ["aventuras", "terror", "fantasia"];

    this.validateNoEmpty(genre);

    this.validateString(genre);

    if (!genres.includes(genre))
      return console.warn("No has introducido uno de los generos admitidos");
  }
}

let books = [];

for (let i = 0; i < 3; i++) {
  let title = prompt("Introduce el título del libro");
  let author = prompt("Introduce el autor del libro");
  let year = Number(prompt("Introduce el año de publicación"));
  let genre = prompt("Introduce el género del libro");

  let book = { title, author, year, genre };

  books.push(new Book(book));
}

const showBooks = () => {
  books.forEach((book) => book.info());
};

showBooks();

const showAuthors = () => {
  let authors = [];

  books.forEach((book) => {
    authors.push(book.author);
  });

  let result = authors.sort();
  return console.log(result);
};

showAuthors();

const searchGenres = (searchedGenre) => {
  const result = books
    .map((el) => el.genre)
    .filter((el) => el === searchedGenre);

  console.log(result);
};

searchGenres("fantasia");
