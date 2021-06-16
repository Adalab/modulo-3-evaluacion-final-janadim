import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const charElement = props.chars.map((eachChar) => {
    return (
      <li key={eachChar.id}>
        <CharacterCard eachChar={eachChar} />
      </li>
    );
  });

  return (
    <section>
      <ul>{charElement}</ul>
    </section>
  );
};
export default CharacterList;
