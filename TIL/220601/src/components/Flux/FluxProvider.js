import { createContext, useContext } from "react";

// Col이 Row의 자식일 때 일일이 안 넘기게
const FluxContext = createContext();
export const useFlux = () => useContext(FluxContext);

const FluxProvider = ({ children, gutter = 0 }) => {
  return (
    <FluxContext.Provider value={{ gutter }}>{children}</FluxContext.Provider>
  );
};

export default FluxProvider;
