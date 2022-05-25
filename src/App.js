import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import axios from "axios";
// import $ from "jquery";

import CharacterView from "./components/CharacterView";
import LocationView from "./components/LocationView";
import HomeView from "./components/HomeView";

const Location_url = "https://rickandmortyapi.com/api/location";

const Characters_url = "https://rickandmortyapi.com/api/character";

const App = () => {
  const [characters, setCharacters] = useState([]);

  const [locations, setLocations] = useState([]);

  const getCharacters = async () => {
    await axios
      .get(Characters_url)
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getLocations = async () => {
    await axios
      .get(Location_url)
      .then((response) => {
        setLocations(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCharacters();

    getLocations();
  }, []);

  return (
    <div className="App">
      {/* routers */}
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route
          path="characters"
          element={<CharacterView character={characters} />}
        />
        <Route
          path="locations"
          element={<LocationView location={locations} />}
        />
      </Routes>
    </div>
  );
};

export default App;
