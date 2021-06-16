import React, { useState, useEffect } from "react";
import getApiData from "../services/api";
import FilterByName from "./FilterByName";
import CharacterList from "./CharacterList";
import ls from "../services/local-storage";

function App() {
  const charsLocalStorageData = ls.get("chars", []);
  const [chars, setChars] = useState(charsLocalStorageData);
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  console.log(filterName);
  //useStates

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

  //handlers

  const handleFilter = (ev) => {
    setFilterName(ev.target.value);
  };

  //render
  const filteredChars = chars.filter((char) => {
    console.log(filterName);
    return char.name.toLowerCase().includes(filterName);
  });

  return (
    <>
      <h1>Rick and Morty</h1>
      <FilterByName handleFilter={handleFilter} />
      <CharacterList chars={filteredChars} />
    </>
  );
}
export default App;
