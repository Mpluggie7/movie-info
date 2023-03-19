export const MovieCard = ({ dataMovies, setFindDetail }) => {
  const imgPath = "https://www.themoviedb.org/t/p/w220_and_h330_face";

  return (
    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 gap-y-4">
      {dataMovies?.map((movie) => (
        <button
          key={movie.id}
          onClick={() =>
            setFindDetail({ type: movie.media_type ?? "movie", id: movie.id })
          }
        >
          <div className="h-full backdrop-blur-sm bg-gray-700/30 transition hover:scale-110 rounded-lg p-1">
            {Object.keys(movie).findIndex((r) => r === "poster_path") > 0 && (
              <img
                className="rounded-lg mb-1"
                src={`${imgPath + movie.poster_path}`}
                alt={`${movie.name ?? movie.title}`}
              />
            )}
            <h1 className="text-white text-center truncate text-sm">
              {movie.name ?? movie.title}
            </h1>
          </div>
        </button>
      ))}
    </div>
  );
};
