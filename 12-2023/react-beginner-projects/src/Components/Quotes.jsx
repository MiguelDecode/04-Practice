import { useEffect, useState } from "react";
import "./Quotes.css";

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
  }

  return (
    <>
      <h2>Project 3: Quote Generator</h2>
      <section className="quotes">
        <button onClick={getNewQuote}>New Quote</button>
        <blockquote>{quote?.text}</blockquote>
        <p>{quote?.author.replace(", type.fit", "")}</p>
      </section>
    </>
  );
}

export default Quotes;
