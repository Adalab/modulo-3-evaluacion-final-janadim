import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.eachChar.id}`}>
      <article>
        <img
          src={props.eachChar.image}
          alt={props.eachChar.name}
          title={props.eachChar.name}
        />
        <h4>{props.eachChar.name}</h4>
        <p>{props.eachChar.species}</p>
      </article>
    </Link>
  );
};
export default CharacterCard;
