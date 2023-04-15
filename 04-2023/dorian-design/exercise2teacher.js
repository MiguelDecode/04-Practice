class Book {
  constructor(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
  }

  bookInfo() {
    return `${this.title} es un libro de ${this.genre} escrito por ${this.author} en el año ${this.year}`;
  }

  getAuthor() {
    return this.author;
  }

  getGenre() {
    return this.genre;
  }
}

let books = [];

while (books.length < 3) {
  let title = prompt("Introduce el título del libro");
  let author = prompt("Introduce el autor del libro");
  let year = Number(prompt("Introduce el año de publicación"));
  let genre = prompt("Introduce el genero del libro").toLowerCase();

  if (
    title !== "" &&
    typeof title === "string" &&
    author !== "" &&
    typeof author === "string" &&
    typeof year === "number" &&
    /^([0-9]){4}$/.test(year) &&
    (genre === "aventuras" || genre === "terror" || genre === "fantasia")
  ) {
    books.push(new Book(title, author, year, genre));
  }
}

const showAllBooks = () => console.log(books);

showAllBooks();

const showAllAuthors = () => {
  const authors = books.map((book) => book.author).sort();
  console.log(authors);
};

showAllAuthors();

const filterByGenre = (searchedGenre) => {
  const genre = prompt("Introduce el género a buscar");

  for (const book of books) {
    if (book.getGenre() === genre) console.log(book.bookInfo());
  }
};

filterByGenre();
