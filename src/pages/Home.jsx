import { useState, useContext } from "react";
import { ContextSearch } from "../App";
// import data from "../week.json";
// import detail from "../detail.json";
import { Detail, MovieCard } from "../components";
import { useGetDataMovies, useDetailMovie } from "../hooks";

export const Home = () => {
  const { setContStrSearch } = useContext(ContextSearch);
  const [findDetail, setFindDetail] = useState({});
  const { dataMovies, randMovie } = useGetDataMovies({ setContStrSearch });
  const { detailMovie, modal, setModal } = useDetailMovie({
    findDetail,
    setFindDetail,
    setContStrSearch,
  });
  const frontPath = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2";

  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1620146095812-813e2de733b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
        }}
        className="h-full min-h-screen flex bg-fixed items-center bg-cover bg-center font-montserrat text-sm"
      >
        {dataMovies?.length > 0 && (
          <div className="main">
            <div className="weekHit p-4 pt-20">
              <div className="topBlock flex mb-8">
                <div className="w-full flex flex-col md:flex-row md:justify-between">
                  <div className="w-full md:w-1/2 flex justify-center items-center text-center text-white font-prompt mb-8">
                    <div>
                      <h1 className="text-2xl">
                        <span className="text-6xl font-bold">Hit </span>in
                      </h1>
                      <h1 className="text-2xl">
                        the <span className="text-7xl font-bold">WEEK</span>
                      </h1>
                    </div>
                  </div>
                  <div className="detailMov w-full md:w-1/2 flex">
                    <div className="w-full flex justify-between gap-x-4 backdrop-blur-sm bg-gray-700/30 rounded-lg p-2">
                      <div className="poster">
                        <img
                          className="rounded-lg"
                          src={`${
                            frontPath + dataMovies[randMovie]?.poster_path
                          }`}
                          alt={`${dataMovies[randMovie]?.id}`}
                        />
                      </div>
                      <div className="detail text-white w-2/3">
                        <h1 className="text-2xl mb-4">
                          {dataMovies[randMovie]?.name ??
                            dataMovies[randMovie]?.title}
                        </h1>
                        <p>{dataMovies[randMovie]?.overview}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="btmBlock flex items-end">
                <div className="">
                  <div
                    id="movie_type"
                    className="backdrop-blur-sm bg-gray-700/30 rounded-lg text-white font-bold p-4 my-4"
                  >
                    Movie
                  </div>
                  <MovieCard
                    dataMovies={dataMovies?.filter(
                      (r) => r.media_type === "movie"
                    )}
                    setFindDetail={setFindDetail}
                  />
                  <div
                    id="tv_type"
                    className="backdrop-blur-sm bg-gray-700/30 rounded-lg text-white font-bold p-4 my-4"
                  >
                    TV
                  </div>
                  <MovieCard
                    dataMovies={dataMovies?.filter(
                      (r) => r.media_type === "tv"
                    )}
                    setFindDetail={setFindDetail}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {modal && <Detail detailMovie={detailMovie} setModal={setModal} />}
    </div>
  );
};
