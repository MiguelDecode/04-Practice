export const getGifs = async (category) => {
  const limit = 20;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${
    import.meta.env.VITE_API_KEY
  }&q=${category}&limit=${limit}`;

  const res = await fetch(url);

  const { data } = await res.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium?.url,
  }));

  console.log(gifs);
  return gifs;
};
