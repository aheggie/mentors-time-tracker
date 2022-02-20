import { useState, createContext } from "react";

// move to data folder next
import data from "../data/data.json";

export const HoursContext = createContext();

const HoursStateProvider = ({ children }) => {
  const [currentTimeSeries, setTimeSeries] = useState(data);

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
