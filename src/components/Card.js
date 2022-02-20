import { useContext } from "react";
import { HoursContext } from "../providers/HoursStateProvider";

const toTitleCase = (string) =>
  string
    // we should receive lower case always but this is for safety
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

const toDashCase = (string) =>
  string
    // we should receive lower case always but this is for safety
    .toLowerCase()
    .split(" ")
    .join("-");

const Card = ({ cardName, modifierClass, imgFile }) => {
  const { processedTimeSeriesData } = useContext(HoursContext);
  const cardTitle = toTitleCase(cardName);
  const cardDashCase = toDashCase(cardName);
  const cardModifierClass = `card--${cardDashCase}`;
  const cardImgPath = `icon-${cardDashCase}.svg`;

  console.log(cardModifierClass === modifierClass);
  console.log(cardImgPath === imgFile);
  return (
    <div className={`card ${modifierClass}`}>
      <div className="card__topaccent">
        <img src={`./img/${imgFile}`} alt="" className="card__topaccentimg" />
      </div>
      <div className="card__maincard">
        <div className="card__titlebar">
          <h2 className="card__title">{cardTitle}</h2>
          <button className="card__menubutton">
            <img
              src="./img/icon-ellipsis.svg"
              alt=""
              className="card__ellipsisicon"
            />
          </button>
        </div>
        <div className="card__stats-container">
          <h3 className="card__hours">10hrs</h3>
          <small className="card__pastinfo">
            Last <span className="card__pasttimeperiod">Week</span> -
            <span className="card__pasthours">8hrs</span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Card;
