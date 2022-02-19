import { useState, createContext } from "react";

export const HoursContext = createContext();

const HoursStateProvider = ({ children }) => {
  const [currentTimeSeries, setTimeSeries] = useState("hours");

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
