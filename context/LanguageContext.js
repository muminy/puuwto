import { createContext } from "react";

const LanguageContext = createContext();
export default LanguageContext;
export const LanguageProvider = LanguageContext.Provider;
