import { useContext } from "react";
import { HoursContext } from "../providers/HoursStateProvider";

const UserCard = () => {
  const { currentTimeSeries, updateTime, processedTimeSeriesData } =
    useContext(HoursContext);

  const setActiveClass = (liTimeSeries) =>
    currentTimeSeries === liTimeSeries ? "usercard__navitem--active" : "";

  console.log(processedTimeSeriesData);
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
          <li
            className={`usercard__navitem ${setActiveClass("daily")}`}
            onClick={() => {
              updateTime("daily");
            }}
            onBlur={() => {
              updateTime("daily");
            }}
          >
            Daily
          </li>
          <li
            className={`usercard__navitem ${setActiveClass("weekly")}`}
            onClick={() => {
              updateTime("weekly");
            }}
            onBlur={() => {
              updateTime("weekly");
            }}
          >
            Weekly
          </li>
          <li
            className={`usercard__navitem ${setActiveClass("monthly")}`}
            onClick={() => {
              updateTime("monthly");
            }}
            onBlur={() => {
              updateTime("monthly");
            }}
          >
            Monthly
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
