import { create } from "zustand";
import { extendTheme, Theme } from "@chakra-ui/react";

// Define the shape of the theme overrides
type ThemeOverrides = {
  components?: {
    Button?: {
      backgroundColor?: string;
      color?: string;
    };
  };
};

// Define the Zustand store
interface ThemeState {
  theme: Partial<Theme>;
  updateTheme: (userTheme: ThemeOverrides) => void;
}

// Default theme
const defaultTheme: Partial<Theme> = extendTheme({
  components: {
    Button: {
      baseStyle: {
        background: "transparent",
        backgroundColor: "#123456",
        color: "#FFFFFF",
      },
    },
  },
});

export const useThemeStore = create<ThemeState>((set) => ({
  theme: defaultTheme,
  updateTheme: (userTheme) => {
    set((state) => ({
      theme: extendTheme(state.theme, userTheme),
    }));
  },
}));

import { useEffect } from "react";

export const ThemeSync: React.FC = () => {
  const updateTheme = useThemeStore((state) => state.updateTheme);

  // TODO: Make a custom hook out of this
  useEffect(() => {
    const element = document.getElementById("myComponent");

    const syncTheme = () => {
      if (!element) return;

      try {
        const data = JSON.parse(element.getAttribute("data") || "{}");
        if (data.theme) {
          updateTheme(data.theme);
        }
      } catch (error) {
        console.error("Invalid JSON data:", error);
      }
    };

    // Observe changes to "data" attribute
    const observer = new MutationObserver(syncTheme);
    if (element) {
      observer.observe(element, {
        attributes: true,
        attributeFilter: ["data"],
      });
    }

    syncTheme(); // Initial sync
    return () => observer.disconnect();
  }, [updateTheme]);

  return null; // No UI needed, just syncing theme
};
