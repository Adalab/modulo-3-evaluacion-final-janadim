import { Link } from "react-router-dom";
import Header from "./Header";

const CharacterDetail = (props) => {
  return (
    <>
      
      <article className="details-container">
        <img src={props.char.image} alt="" className="img-details" />
        <ul className="descriptionText">
          <h2 className="text-name">{props.char.name}</h2>
          <li>
            - Status: <span className="text-status">{props.char.status}</span>
          </li>
          <li>
            - Species: <span className="text-spec">{props.char.species}</span>
          </li>
          <li>
            - Origin: <span className="text-origin">{props.char.origin}</span>
          </li>
          <li>
            - Episodes:
            <span className="text-episodes">{props.char.episodes}</span>
          </li>
        </ul>

        <Link to="/">
          <p className="back-link">Go back</p>
        </Link>
      </article>
    </>
  )
};
export default CharacterDetail;
