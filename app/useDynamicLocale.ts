import { useEffect, useState } from "react";

export const useDynamicLocale = () => {
  const [locale, setLocale] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      console.log("Next.js app received message:", e.data);

      if (typeof e.data === "object" && e.data?.locale) {
        setLocale(e.data.locale);
      }
    };

    window.addEventListener("message", handler);

    // Tell the parent we are ready and need the locale
    window.parent.postMessage({ type: "next-app-ready" }, "*");

    return () => window.removeEventListener("message", handler);
  }, []);

  return locale;
};
