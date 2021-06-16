import React, { useState, useEffect } from "react";
import getApiData from "../services/api";
import FilterByName from "./FilterByName";
import CharacterList from "./CharacterList";
import ls from "../services/local-storage";
import { Route, Switch } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";

function App() {
  const charsLocalStorageData = ls.get("chars", []);
  const [chars, setChars] = useState(charsLocalStorageData);
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
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
    return char.name.toLowerCase().includes(filterName);
  });

  const renderCharDetail = (props) => {
    const routeCharId = props.match.params.id;
    // const foundChar = chars.find((character) => {
    //   console.log(character.id);
    //   return character.id === routeCharId;
    // });

    return <CharacterDetail char={chars[routeCharId - 1]} />;
  };
  // console.log("router props", props.match.params.id);
  // if (foundChar !== undefined) {
  //   return <CharacterDetail />;
  // } else {
  //   return <p>No</p>;
  // }
  // };

  return (
    <>
      <h1>Rick and Morty</h1>
      <Switch>
        <Route exact path="/">
          <div>
            <FilterByName handleFilter={handleFilter} />
            <CharacterList chars={filteredChars} />
          </div>
        </Route>
        <Route path="/character/:id" render={renderCharDetail} />
      </Switch>
    </>
  );
}
export default App;
