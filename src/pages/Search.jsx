import { useParams } from "react-router-dom";
import { MovieCard, Detail } from "../components";
import axios from "axios";
import { ContextSearch } from "../App";
// import data from "../week.json";
// import detail from "../detail.json";
import { useState, useEffect, useContext } from "react";

export const Search = () => {
  const [dataMovies, setDataMovies] = useState([]);
  const { strSearch } = useParams();
  const { setContStrSearch } = useContext(ContextSearch);
  const [modal, setModal] = useState(false);
  const [detailMovie, setDetailMovie] = useState({});
  const [findDetail, setFindDetail] = useState({});

  useEffect(() => {
    // setDataMovies(data.results);
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_APIKEY
      }&language=en-US&query=${strSearch}&page=1&include_adult=false`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setDataMovies(response.data.results);
        setContStrSearch("");
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [strSearch]);

  useEffect(() => {
    // setDetailMovie(detail);
    const getDetailFunc = () => {
      const config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `https://api.themoviedb.org/3/${findDetail.type}/${
          findDetail.id
        }?api_key=${import.meta.env.VITE_APIKEY}`,
        headers: {},
      };
      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          setDetailMovie(response.data);
          setModal(true);
          setContStrSearch("");
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    Object.keys(findDetail).length > 0 && getDetailFunc();
  }, [findDetail]);

  useEffect(() => {
    !modal && setFindDetail("");
  }, [modal]);

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
