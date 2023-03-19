import { useState, useEffect } from "react";
import axios from "axios";

export const useGetDataMovies = ({setContStrSearch}) => {
  const [dataMovies, setDataMovies] = useState([]);
  const [randMovie, setRandMovie] = useState(0);

  useEffect(() => {
    // setDataMovies(data.results);
    // setDetailMovie(detail);
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://api.themoviedb.org/3/trending/all/week?api_key=${
        import.meta.env.VITE_APIKEY
      }`,
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
  }, []);

  useEffect(() => {
    setRandMovie(Math.floor(Math.random() * dataMovies?.length));
  }, [dataMovies]);

  return { dataMovies, setDataMovies, randMovie, setRandMovie };
};
