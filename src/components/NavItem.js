import { useContext } from "react";
import { HoursContext } from "../providers/HoursStateProvider";

const NavItem = ({ timeSeriesType }) => {
  const { currentTimeSeries, updateTime } = useContext(HoursContext);

  const setActiveClass = (liTimeSeries) =>
    currentTimeSeries === liTimeSeries ? "usercard__navitem--active" : "";
  return (
    <li
      className={`usercard__navitem ${setActiveClass(timeSeriesType)}`}
      onClick={() => {
        updateTime(timeSeriesType);
      }}
      onBlur={() => {
        updateTime(timeSeriesType);
      }}
    >
      {timeSeriesType[0].toUpperCase() + timeSeriesType.slice(1)}
    </li>
  );
};

export default NavItem;
