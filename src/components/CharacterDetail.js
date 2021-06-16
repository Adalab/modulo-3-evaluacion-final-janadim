import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <>
      <img src={props.char.image} />
      <h2>{props.char.name}</h2>
      <p>Status: {props.char.status}</p>
      <p>Species: {props.char.species}</p>
      <p>Origin: {props.char.origin}</p>
      <p>Episodes: {props.char.episodes}</p>

      <Link to="/">Go back</Link>
    </>
  );
};
export default CharacterDetail;
