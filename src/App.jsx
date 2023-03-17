import React from "react";
// import reactSvg from "./assets/react.svg";
// <img src={reactSvg} alt="" />
// {import.meta.env.VITE_APIKEY}

const App = () => {
  return (
    <div>
      <div className="navbar"></div>
      <div className="main">
        <img
          loading="lazy"
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/3th5xbj2SvrjZ4Zy85hau2c94Rz.jpg"
          alt=""
        />
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
