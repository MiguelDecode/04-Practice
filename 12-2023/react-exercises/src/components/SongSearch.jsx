import { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import Loader from "./Loader";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (data) => {
    setSearch(data);
  };

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      let { artist, song } = search;

      setIsLoading(true);

      let artistUrl = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      // console.log(artistRes, songRes);

      setBio(artistRes);
      setLyric(songRes);
      setIsLoading(false);
    };

    fetchData();
  }, [search]);

  return (
    <div>
      <h2>Song Search</h2>
      <article className="grid-1-3">
        <SongForm handleSearch={handleSearch} />
        {isLoading && <Loader />}
        <SongDetails search={search} lyric={lyric} bio={bio} />
        {search && !isLoading && <b>Error en las peticiones</b>}
      </article>
    </div>
  );
};

export default SongSearch;
