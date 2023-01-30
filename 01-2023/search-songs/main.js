const $form = document.getElementById("song-search");
const $loader = document.querySelector(".loader");
const $error = document.querySelector(".error");
const $main = document.querySelector(".main");
const $artist = document.querySelector(".artist");
const $song = document.querySelector(".song");

$form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    $loader.style.display = "block";

    let artist = event.target.artist.value.toLowerCase();
    let song = event.target.song.value.toLowerCase();

    let $artistTemplate = "";
    let $songTemplate = "";

    let artistAPI = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
    let songAPI = `https://api.lyrics.ovh/v1/${artist}/${song}`;

    let artistFetch = fetch(artistAPI);
    let songFetch = fetch(songAPI);

    [artistRes, songRes] = await Promise.all([artistFetch, songFetch]);

    let artistData = await artistRes.json();
    let songData = await songRes.json();

    console.log(artistRes, songRes);
    console.log(artistData, songData);

    if (artistData.artists === null) {
      $artistTemplate = `<h2>No existe el intérprete <mark>${artist}</mark></h2>`;
    } else {
      let artist = artistData.artists[0];
      $artistTemplate = `
      <h2>${artist.strArtist}</h2>
      <img src="${artist.strArtistThumb}" alt="${artist.strArtist}">
      <p>
      ${artist.inBornYear || "Desconocido"} - ${
        artist.intDiedYear || "Presente"
      }
      </p>
      <p>${artist.strCountry}</p>
      <p>${artist.strGenre} - ${artist.strStyle}</p>
      <a href="http://${artist.strWebsite}" target="_blank">Sitio web</a>
      <p>${artist.strBiographyEN}</p>
      `;
    }

    if (songData.error) {
      $songTemplate = `<h2>No existe la canción <mark>${song}</mark></h2>`;
    } else {
      $songTemplate = `
      <h2>${song.toUpperCase()}</h2>
      <blockquote>${songData.lyrics}</blockquote>
      `;
    }

    $loader.style.display = "none";
    $artist.innerHTML = $artistTemplate;
  } catch (err) {
    console.log(err);
    let message = err.statusText || "Ocurrió un error";
    $error.innerHTML = `<p>Error: ${err.status}: ${message}</p>`;

    $loader.style.display = "none";
  }
});
