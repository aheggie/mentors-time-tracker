import { useState, createContext } from "react";

import data from "../data/data.json"; //eslint-disable-line no-unused-vars

const processTimesSeriesJSON = (timeSeriesJSON, selectedTimeSeriesType) =>
  timeSeriesJSON.reduce(
    (acc, { title, timeframes }) => ({
      ...acc,
      [title.toLowerCase()]: timeframes[selectedTimeSeriesType],
    }),
    {}
  );

export const HoursContext = createContext();

const HoursStateProvider = ({ children }) => {
  // core state is simply the time series we are seeking - the atomic tag of this is the only fundamentally held state
  // we
  const [currentTimeSeries, setTimeSeries] = useState("daily");

  // this just provides some protection around updating state to only valid types
  const updateTimeSeries = (timeSeriesType) => {
    if (["daily", "weekly", "monthly"].includes(timeSeriesType)) {
      setTimeSeries(timeSeriesType);
    } else {
      console.error(
        `Error in call to updateTimeSeries, only "daily", "weekly" or "monthly" are valid 1th arguments`
      );
    }
  };

  const processedTimeSeriesData = processTimesSeriesJSON(
    data,
    currentTimeSeries
  );

  return (
    <HoursContext.Provider
      value={{
        currentTimeSeries: currentTimeSeries,
        updateTime: updateTimeSeries,
        processedTimeSeriesData: processedTimeSeriesData,
      }}
    >
      {children}
    </HoursContext.Provider>
  );
};

export default HoursStateProvider;
