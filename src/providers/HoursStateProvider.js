import { useState, createContext } from "react";

export const HoursContext = createContext();

const HoursStateProvider = ({ children }) => {
  const [currentTimeSeries, setTimeSeries] = useState("hours");
  console.log("hello in provider");
  fetch("data.json")
    // response has a .json() method but response.json() returns an "Unexpected token < in JSON at position 0" error
    .then((response) => console.log(response))
    // .then((data) => console.log(data))
    .catch((err) => console.error("Error oh no", err));
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
