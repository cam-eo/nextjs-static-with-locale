import { useEffect, useState } from "react";

export const useLocale = (locale: string) => {
  const [messages, setMessages] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    fetch(`/locales/${locale}.json`)
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch(() => {
        console.error(`Could not load locale: ${locale}`);
        setMessages({});
      });
  }, [locale]);

  return messages;
};
