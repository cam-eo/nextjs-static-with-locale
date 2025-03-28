/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { createContext, useContext } from "react";

const TranslationContext = createContext<{
  t: Record<string, string>;
}>({ t: {} });

interface TranslationProvider {
  translations: any;
  children: any;
}

export const TranslationProvider = ({
  translations,
  children,
}: TranslationProvider) => {
  return (
    <TranslationContext.Provider value={{ t: translations }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslations = () => useContext(TranslationContext);
