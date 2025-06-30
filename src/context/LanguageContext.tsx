import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import fr from "../locales/fr.json";
import en from "../locales/en.json";

type Lang = "fr" | "en";

const translations = {
  fr,
  en,
};

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof fr;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "fr",
  setLang: () => {},
  t: fr,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang") as Lang;
    if (storedLang) setLang(storedLang);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
