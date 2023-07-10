const $form = document.getElementById("song-search");
const $loader = document.querySelector(".loader");
const $error = document.querySelector(".error");
const $main = document.querySelector("main");
const $artist = document.querySelector(".artist");
const $song = document.querySelector(".song");

$form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    $loader.style.display = "block";

    let artist = event.target.artist.value.toLowerCase();
    let song = event.target.song.value.toLowerCase();

    let $artistTemplate = ``;
    let $songTemplate = ``;

    const artistAPI = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
    const songAPI = `https://api.lyrics.ovh/v1/${artist}/${song}`;

    const artistFetch = fetch(artistAPI);
    const songFetch = fetch(songAPI);

    const [artistRes, songRes] = await Promise.all([artistFetch, songFetch]);

    const artistData = await artistRes.json();
    const songData = await songRes.json();

    if (artistData.artist === null) {
      $artistTemplate = `<h2>No existe el intérprete ${artist}</h2>`;
    } else {
      let artist = artistData.artist[0];
      $artistTemplate = `
        <h2>${artist.strArtist}</h2>
        <img src="${artist.strArtistThumb}" alt="${artist.strArtist}">
        <p>${artist.intBornYear} - ${artist.intDiedYear || "Presente"}</p>
        <p>${artist.strCountry}</p>
        <p>${artist.strGenre}</p>
        <p>${artist.strStyle}</p>
        <a href="http://${artist.strWebsite}" target="_blank">Sitio Web</a>
        <p>${artist.strBiography}</p>
      `;
    }

    if (songData.error) {
      $songTemplate = `<h2>No existe la canción ${song}</h2>`;
    } else {
      $songTemplate = `
      <h2>${song}</h2>
      <blockquote>${songData.lyrics}</blockquote>
      `;
    }

    $loader.style.display = "none";
    $artist.innerHTML = $artistTemplate;
    $song.innerHTML = $songTemplate;

    console.log(artistData);
    console.log(songData);
  } catch (err) {
    console.log(err);
    let msg = err.statusText || "Ocurrió un error";
    $error.innerHTML = `<p>Error ${err.status}: ${msg}</p>`;
    $loader.style.display = "none";
  }
});
