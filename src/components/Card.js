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

const Card = ({ cardName }) => {
  const { currentTimeSeries, processedTimeSeriesData } =
    useContext(HoursContext);
  const cardTitle = toTitleCase(cardName);
  const cardDashCase = toDashCase(cardName);
  const cardModifierClass = `card--${cardDashCase}`;
  const cardImgPath = `icon-${cardDashCase}.svg`;

  const { current, previous } = processedTimeSeriesData[cardName];

  // this is sort of fussy reconjugation but it has to be done somewhere i think;
  // This use of ternary conditionals is like switches in other languages but idk if enough js devs knows that pattern;
  const pastTimeSeriesNoun =
    currentTimeSeries === "daily"
      ? "Yesterday"
      : currentTimeSeries === "weekly"
      ? "Last Week"
      : currentTimeSeries === "monthly"
      ? "Last Month"
      : console.error(
          "there is something wrong with the currenTimeSeries the Card components are receiving from HoursContext, check pastTimeSeriesNoun ternary conditional in Card.js component file"
        );

  return (
    <div className={`card ${cardModifierClass}`}>
      <div className="card__topaccent">
        <img
          src={`./img/${cardImgPath}`}
          alt=""
          className="card__topaccentimg"
        />
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
          <h3 className="card__hours">{current}hrs</h3>
          <small className="card__pastinfo">
            {/* card__pasttimeperiod may no longer be needed - check css */}
            <span className="card__pasttimeperiod">
              {pastTimeSeriesNoun}
            </span> - <span className="card__pasthours">{previous}hrs</span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Card;
