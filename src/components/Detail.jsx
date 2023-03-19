export const Detail = ({ detailMovie, setModal }) => {
  const frontPath = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2";
  const bDropPath = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

  return (
    <div
      id="bgDropDetail"
      onClick={(e) => {
        e.target.id === "bgDropDetail" && setModal(false);
      }}
      className="fixed top-0 left-0 h-full w-full bg-fixed flex justify-center items-start md:items-center bg-black/80 font-montserrat text-sm p-4 pt-20 z-20"
    >
      {Object.keys(detailMovie).length > 0 && (
        <div className="relative w-2/3 rounded-lg p-2">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-lg blur-sm brightness-[25%]"
            style={{
              backgroundImage: `url(${bDropPath + detailMovie.poster_path})`,
            }}
          ></div>

          <div className="flex flex-col md:flex-row gap-x-2 mb-4">
            <div className="w-full md:w-1/3 flex justify-center blur-none mb-4 md:mb-0">
              <img
                className="rounded-lg w-full object-cover"
                src={`${frontPath + detailMovie.poster_path}`}
                alt=""
              />
            </div>

            <div className="detail w-full md:w-2/3 text-white z-10">
              <h1 className="text-xl font-bold mb-2">
                {detailMovie.name ?? detailMovie.title}
              </h1>

              <p className="mb-2">
                <span className="font-bold">Overview: </span>
                <span>{detailMovie.overview}</span>
              </p>

              <p className="mb-2">
                <span className="font-bold">On-Air/Released: </span>
                <span>
                  {detailMovie.first_air_date ?? detailMovie.release_date}
                </span>
              </p>

              <p className="mb-2">
                <span className="font-bold">Rating: </span>
                <span>
                  {detailMovie.vote_average.toFixed(2)}
                  {` (${detailMovie.vote_count})`}
                </span>
              </p>
            </div>
          </div>

          <div className="text-center text-white blur-none p-2">
            <p>{detailMovie.tagline}</p>
          </div>
        </div>
      )}
    </div>
  );
};
