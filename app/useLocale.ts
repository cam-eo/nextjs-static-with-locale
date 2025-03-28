// lib/useLocale.ts
import { useEffect, useState } from "react";

export function useLocale(locale: string | null) {
  const [messages, setMessages] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    if (!locale) return; // <- don't fetch until we have a locale
    fetch(`/locales/${locale}.json`)
      .then((res) => res.json())
      .then(setMessages)
      .catch(() => setMessages(null));
  }, [locale]);

  return messages;
}
