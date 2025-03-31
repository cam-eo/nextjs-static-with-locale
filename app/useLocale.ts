import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useLocale(locale: string | null) {
  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const [messages, setMessages] = useState<Record<string, string> | null>(null);

  const exteralLocalePath = params.get("localePath");
  const fetchPath = `${
    exteralLocalePath ? `${exteralLocalePath}/public` : ""
  }/locales/${locale}.json`;

  console.log({ locale, exteralLocalePath, fetchPath });

  useEffect(() => {
    if (!locale) return; // <- don't fetch until we have a locale
    fetch(fetchPath)
      .then((res) => res.json())
      .then(setMessages)
      .catch(() => setMessages(null));
  }, [locale, exteralLocalePath, fetchPath]);

  return messages;
}
