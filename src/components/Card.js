const Card = () => (
  <div className="card card--work">
    <div className="card__topaccent">
      <img
        src="./img/icon-work.svg"
        alt="accent icon"
        className="card__topaccentimg"
      />
    </div>
    <div className="card__maincard">
      <div className="card__titlebar">
        <h2 className="card__title">Work</h2>
        <button className="card__menubutton">
          <img
            src="./img/icon-ellipsis.svg"
            alt="ellipsis icon"
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

export default Card;
