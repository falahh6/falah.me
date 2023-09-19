import { createContext, useState } from "react";
export const MyContext = createContext();

const Provider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const moodSwitchHandler = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <MyContext.Provider value={{ darkMode, moodSwitchHandler }}>
      {children}
    </MyContext.Provider>
  );
};

export { Provider };
