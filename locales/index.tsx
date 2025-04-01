import { useEffect } from "react";
import { useLocaleStore } from "../store";

export function LocaleSync() {
  const updateLocales = useLocaleStore((state) => state.updateLocales);

  useEffect(() => {
    const element = document.getElementById("myComponent");

    const syncLocales = () => {
      if (!element) return;

      try {
        const data = JSON.parse(element.getAttribute("data") || "{}");
        if (data.locales) {
          updateLocales(data.locales);
        }
      } catch (error) {
        console.error("Invalid JSON data:", error);
      }
    };

    // Observe changes to "data" attribute
    const observer = new MutationObserver(syncLocales);
    if (element) {
      observer.observe(element, {
        attributes: true,
        attributeFilter: ["data"],
      });
    }

    syncLocales(); // Initial sync
    return () => observer.disconnect();
  }, [updateLocales]);

  return null; // No UI needed, just syncing locales
}
