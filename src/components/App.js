import React, { useState, useEffect } from "react";
import getApiData from "../services/Api";

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
    </>
  );
}
export default App;
