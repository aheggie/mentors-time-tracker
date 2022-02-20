import NavItem from "./NavItem";

const UserCard = () => {
  return (
    <div className="usercard">
      {/* in a dynamic App this would be a component */}
      <div className="usercard__userinfo">
        <img
          src="./img/image-jeremy.png"
          alt=""
          className="usercard__avatarimg"
        />
        <div className="usercard__name-container">
          <small className="usercard__reportfor">Report For</small>
          <h1 className="usercard__name">Jeremy Robson</h1>
        </div>
      </div>
      <div className="usercard__navarea">
        <ul className="usercard__navlist">
          <NavItem timeSeriesType="daily" />
          <NavItem timeSeriesType="weekly" />
          <NavItem timeSeriesType="monthly" />
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
