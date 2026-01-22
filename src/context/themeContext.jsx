import { createContext, useContext, useEffect, useState } from "react";
import { themes } from "../theme/themes";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("blue");

  useEffect(() => {
  const t = themes[theme];

  document.documentElement.style.setProperty("--primary-color", t.primary);
  document.documentElement.style.setProperty("--secondary-color", t.secondary);

  document.documentElement.style.setProperty("--shade-1", t.shade1);
  document.documentElement.style.setProperty("--shade-2", t.shade2);
  document.documentElement.style.setProperty("--shade-3", t.shade3);
  document.documentElement.style.setProperty("--shade-4", t.shade4);
  document.documentElement.style.setProperty("--shade-5", t.shade5);

  document.documentElement.style.setProperty("--bg-image", `url(${t.bgImage})`);
}, [theme]);


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
