import { useState, useEffect } from "react";
import axios from "axios";

export const useGetDataSearch = ({ strSearch, setContStrSearch }) => {
  const [dataMovies, setDataMovies] = useState([]);

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

  return { dataMovies, setDataMovies };
};
