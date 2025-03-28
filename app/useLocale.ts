import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function useLocale(locale: string | null) {
  const searchParams = useSearchParams();

  const [messages, setMessages] = useState<Record<string, string> | null>(null);

  // const params = new URLSearchParams(searchParams.toString());

  const exteralLocalePath = searchParams.get("localePath");
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
