import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const charElement = props.chars.map((eachChar) => {
    return <CharacterCard eachChar={eachChar} />;
  });

  return (
    <section>
      <ul>{charElement}</ul>
    </section>
  );
};
export default CharacterList;
