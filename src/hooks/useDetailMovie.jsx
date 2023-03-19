import { useState, useEffect } from "react";
import axios from "axios";

export const useDetailMovie = ({
  findDetail,
  setFindDetail,
  setContStrSearch,
}) => {
  const [detailMovie, setDetailMovie] = useState({});
  const [modal, setModal] = useState(false);

  useEffect(() => {
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
    !modal && setFindDetail({});
  }, [modal]);

  return { detailMovie, setDetailMovie, modal, setModal };
};
