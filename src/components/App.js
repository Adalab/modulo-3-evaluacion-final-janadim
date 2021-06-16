import React, { useState, useEffect } from "react";
import getApiData from "../services/api";
import CharacterList from "./CharacterList";

function App() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    getApiData().then((charsData) => {
      setChars(charsData);
    });
  }, []);

  return (
    <>
      <h1>Rick and Morty</h1>
      <CharacterList chars={chars} />
    </>
  );
}
export default App;
