export const quoteToHTML = (string) => {
  const arr = Array.from(string);

  const fragment = document.createDocumentFragment();

  arr.forEach((letter) => {
    const span = document.createElement("span");
    span.textContent = letter;

    fragment.appendChild(span);
  });

  return fragment;
};
