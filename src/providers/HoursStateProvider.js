import { useState, createContext } from "react";

import data from "./data.json";

export const HoursContext = createContext();

const HoursStateProvider = ({ children }) => {
  const [currentTimeSeries, setTimeSeries] = useState("hours");
  console.log("hello in provider", data);

  const updateTime = () => setTimeSeries("days");

  return (
    <HoursContext.Provider
      value={{
        currentTimeSeries: currentTimeSeries,
        updateTime: updateTime,
      }}
    >
      {children}
    </HoursContext.Provider>
  );
};

export default HoursStateProvider;
