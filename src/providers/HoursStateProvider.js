import { useState, createContext } from "react";

import data from "../data/data.json"; //eslint-disable-line no-unused-vars

export const HoursContext = createContext();

const HoursStateProvider = ({ children }) => {
  const [currentTimeSeries, setTimeSeries] = useState("daily");

  const updateTimeSeries = (timeSeriesType) => {
    if (["daily", "weekly", "monthly"].includes(timeSeriesType)) {
      setTimeSeries(timeSeriesType);
    } else {
      console.error(
        `Error in call to updateTimeSeries, only "daily", "weekly" or "monthly" are valid 1th arguments`
      );
    }
  };

  const subsidiaryData = `modified ${currentTimeSeries}`;
  return (
    <HoursContext.Provider
      value={{
        currentTimeSeries: currentTimeSeries,
        updateTime: updateTimeSeries,
        subsidiaryData: subsidiaryData,
      }}
    >
      {children}
    </HoursContext.Provider>
  );
};

export default HoursStateProvider;
