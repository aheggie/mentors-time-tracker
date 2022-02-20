import { useContext } from "react";
import { HoursContext } from "../providers/HoursStateProvider";

const UserCard = () => {
  const { currentTimeSeries, updateTime, subsidiaryData } =
    useContext(HoursContext);

  console.log(subsidiaryData);
  return (
    <div className="usercard">
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
          <li className="usercard__navitem">Daily</li>
          <li
            className="usercard__navitem usercard__navitem--active"
            onClick={() => {
              updateTime("monthly");
              console.log(currentTimeSeries);
            }}
          >
            Weekly
          </li>
          <li className="usercard__navitem">Monthly</li>
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
