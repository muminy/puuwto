import Layout from "components/Layout";
import { useState } from "react";
import MovieList from "components/MovieList";

export default function () {
  const [tags, setTags] = useState([
    "Gerilim",
    "Bilim kurgu",
    "Korku",
    "Komedi",
    "Kişisel gelişim",
  ]);

  const [movies, setMovies] = useState([
    {
      key: 0,
      title: "Dark",
      description:
        "İki küçük çocuğun ortadan kaybolmasının dört aile arasındaki ilişkileri ortaya koyduğu bir Alman kasabasında kurulan doğaüstü bir bükülmeye sahip bir aile destanı.",
      image:
        "https://m.media-amazon.com/images/M/MV5BZmY2YzU4NDktODIxYi00YWIyLWIzYTctODBkYzYzZjc0ODdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg",
      imbd: "8,8/10",
    },
    {
      key: 1,
      title: "Esaretin Bedeli",
      description:
        "Hapsedilen iki adam birkaç yıl boyunca bağ kuruyor, ortak ahlaksızlık eylemleriyle teselli ve nihayet kurtuluş buluyorlar.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
      imbd: "9,3/10",
    },
  ]);
  return (
    <Layout>
      <div className="bigger_header">
        Film Önerileri
        <p>
          Daha önceden izlediğim ve beğendiğim kişisel
          gelişim, bilim kurgu, aksiyon filmlerini bir liste
          haline getirip sizlere sunuyorum.
        </p>
      </div>
      <div className="movie_list flex">
        {tags.map((item, key) => (
          <div key={key} className="list_of_tag border">
            {item}
          </div>
        ))}
      </div>
      {movies.map((item) => (
        <MovieList {...item} />
      ))}
    </Layout>
  );
}
