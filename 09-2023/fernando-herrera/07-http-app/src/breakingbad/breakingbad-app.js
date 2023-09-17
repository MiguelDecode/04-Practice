/**
 * @returns {Promie<Object>} Quote information
 */
const fetchQuote = async () => {
  const res = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");

  const data = await res.json();

  return data[0];
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingBadApp = async (element) => {
  document.querySelector("#app-title").innerHTML = "Breaking Bad App";
  element.innerHTML = "Loading...";

  const quoteLabel = document.createElement("blockquote");
  const authorLabel = document.createElement("h3");
  const nextQuoteBtn = document.createElement("button");
  nextQuoteBtn.textContent = "Next Quote";

  const renderQuote = (data) => {
    quoteLabel.textContent = data.quote;
    authorLabel.textContent = data.author;

    element.replaceChildren(quoteLabel, authorLabel, nextQuoteBtn);
  };

  // Add a listener to the button
  nextQuoteBtn.addEventListener("click", () => {
    element.innerHTML = "Loading...";
    fetchQuote().then(renderQuote);
  });

  fetchQuote().then(renderQuote);
};
