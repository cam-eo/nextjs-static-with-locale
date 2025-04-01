import { create } from "zustand";

type LocaleData = {
  title: string;
  subtitle: string;
};

export type Locales = {
  en: LocaleData;
  nl: LocaleData;
};

const defaultLocales: Locales = {
  en: {
    title: "Hello",
    subtitle: "Welcome to our site!",
  },
  nl: {
    title: "Hallo",
    subtitle: "Welkom op onze site!",
  },
};

interface LocaleState {
  locales: Locales;
  updateLocales: (externalLocales: Partial<Locales>) => void;
}

export const useLocaleStore = create<LocaleState>((set) => ({
  locales: defaultLocales,
  updateLocales: (externalLocales) => {
    set((state) => ({
      locales: {
        en: { ...state.locales.en, ...(externalLocales.en || {}) },
        nl: { ...state.locales.nl, ...(externalLocales.nl || {}) },
      },
    }));
  },
}));
