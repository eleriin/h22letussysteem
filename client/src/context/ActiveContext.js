import { createContext, useContext, useState } from "react";

export const ActiveContext = createContext();

export const ActiveProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(true); // Always true for now

  return (
    <ActiveContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </ActiveContext.Provider>
  );
};

// ✅ This was missing — add this:
export const useActive = () => useContext(ActiveContext);