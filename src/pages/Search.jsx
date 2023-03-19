import { useParams } from "react-router-dom";
import { MovieCard, Detail } from "../components";
import { ContextSearch } from "../App";
// import data from "../week.json";
// import detail from "../detail.json";
import { useState, useContext } from "react";
import { useGetDataSearch, useDetailMovie } from "../hooks";

export const Search = () => {
  const { strSearch } = useParams();
  const { setContStrSearch } = useContext(ContextSearch);
  const [findDetail, setFindDetail] = useState({});
  const { dataMovies } = useGetDataSearch({ strSearch, setContStrSearch });
  const { detailMovie, modal, setModal } = useDetailMovie({
    findDetail,
    setFindDetail,
    setContStrSearch,
  });

  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1620146095812-813e2de733b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
        }}
        className="h-full min-h-screen flex bg-fixed bg-cover bg-center font-montserrat text-sm"
      >
        <div className="p-4 pt-20">
          <div className="backdrop-blur-sm bg-gray-700/30 rounded-lg text-white p-4 mb-4">
            <p>
              Search '{strSearch}' Found {dataMovies.length} Movies
            </p>
          </div>
          <MovieCard dataMovies={dataMovies} setFindDetail={setFindDetail} />
        </div>
      </div>

      {modal && <Detail detailMovie={detailMovie} setModal={setModal} />}
    </div>
  );
};
