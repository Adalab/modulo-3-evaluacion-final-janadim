const getApiData = () => {
  fetch("https://rickandmortyapi.com/api/character/?results=20")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
  console.log("obteniendo datos de API");
};

export default getApiData;
