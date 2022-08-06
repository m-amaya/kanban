import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface ThemeStore {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as ThemeStore);

export const ThemeProvider: FC<PropsWithChildren> = (props) => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }} {...props} />
  );
};

export const useThemeStore = () => useContext(ThemeContext);
