import React, { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Search } from "./pages";
import { Navbar } from "./components";

export const ContextSearch = createContext();

export const App = () => {
  const [contStrSearch, setContStrSearch] = useState("");
  return (
    <BrowserRouter>
      <ContextSearch.Provider value={{ contStrSearch, setContStrSearch }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search/:strSearch" element={<Search />} />
        </Routes>
      </ContextSearch.Provider>
    </BrowserRouter>
  );
};
