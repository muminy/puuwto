import { createContext } from "react";

const ThemeContext = createContext();
export default ThemeContext;
export const ThemeProvider = ThemeContext.Provider;
