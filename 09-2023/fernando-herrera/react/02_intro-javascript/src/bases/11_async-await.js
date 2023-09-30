/* const getImagePromise = () =>
  new Promise((resolve) => resolve("https://ahsetuahheotnhtahs.com")); */

// getImagePromise().then((res) => console.log(res));

const getImage = async () => {
  try {
    const apiKey = "85aUf6V53ZnUrEvtwRxeRMN";
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );

    const { data } = await response.json();
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    // Handle error
    console.error(error);
  }
};

getImage();

/* 



request
  .then((res) => res.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  })
  .catch((err) => console.warn(err)); */
