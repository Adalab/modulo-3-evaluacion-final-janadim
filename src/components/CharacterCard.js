const CharacterCard = (props) => {
  return (
    <article>
      <img
        src={props.eachChar.image}
        alt={props.eachChar.name}
        title={props.eachChar.name}
      />
      <h4>{props.eachChar.name}</h4>
      <p>{props.eachChar.species}</p>
    </article>
  );
};
export default CharacterCard;
