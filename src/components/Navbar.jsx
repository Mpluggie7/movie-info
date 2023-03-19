import { Link, useNavigate } from "react-router-dom";
import { FaFireAlt, FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { ContextSearch } from "../App";

export const Navbar = () => {
  const { contStrSearch, setContStrSearch } = useContext(ContextSearch);
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${e.target.value}`);
      e.preventDefault();
    }
  };

  return (
    <div className="navbar fixed top-0 w-full h-14 flex items-center backdrop-blur-sm bg-gray-800/80 shadow-lg z-10 p-4">
      <div className="w-full flex justify-between gap-x-8 text-white">
        <Link to="/" className="flex items-center gap-x-2 hover:text-slate-300">
          <FaFireAlt />
          Home
        </Link>
        <div className="flex gap-x-4">
          <div className="flex items-center gap-x-2 hover:text-slate-300">
            <input
              type="text"
              onChange={(e) => setContStrSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              value={contStrSearch}
              className="bg-white text-black rounded-md p-1 px-4"
              placeholder="Movie only ..."
            />
            <Link to={`/search/${contStrSearch}`}>
              <FaSearch />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
