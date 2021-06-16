import React, { useState, useEffect } from "react";
import getApiData from "../services/api";
import Filters from "./FilterByName";
import CharacterList from "./CharacterList";
import ls from "../services/local-storage";

function App() {
  const charsLocalStorageData = ls.get("chars", []);
  const [chars, setChars] = useState(charsLocalStorageData);
  // const [filterName, setfilterName] = useState(ls.get("filterName", ""));

  useEffect(() => {
    if (chars.length === 0) {
      getApiData().then((charsData) => {
        setChars(charsData);
      });
    }
  }, []);

  useEffect(() => {
    ls.set("chars", chars);
  }, [chars]);

  return (
    <>
      <h1>Rick and Morty</h1>
      <Filters />
      <CharacterList chars={chars} />
    </>
  );
}
export default App;
