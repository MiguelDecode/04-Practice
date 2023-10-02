export const getRandomQuote = async () => {
  const url = "https://type.fit/api/quotes";

  try {
    const res = await fetch(url);
    const json = await res.json();
    const randomIndex = Math.floor(Math.random() * json.length + 1);

    return json[randomIndex].text;
  } catch (err) {
    console.error(err);
  }
};
