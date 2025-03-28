// lib/getTranslation.ts
export async function getTranslation(locale: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/locales/${locale}.json`,
    {
      // next: { revalidate: 0 }, // disable cache if you want instant update when file changes
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to load translations for locale "${locale}"`);
  }

  return res.json();
}
