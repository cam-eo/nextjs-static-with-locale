"use client";
import { useDynamicLocale } from "../useDynamicLocale";
import { useLocale } from "../useLocale";
// import { useTranslations } from "@/providers/TranslationContext";
import {
  useRouter,
  // useParams
} from "next/navigation";

export default function Home() {
  // const { t } = useTranslations();
  const { push } = useRouter();
  const locale = useDynamicLocale();

  // Debugging: Check if locale and messages are set
  console.log("Locale:", locale);

  const t = useLocale(locale as string);
  console.log("Messages:", t);

  return (
    <div>
      <main>
        <div>
          <button onClick={() => push("/en")}>en</button>
          <button onClick={() => push("/nl")}>nl</button>
        </div>
        <h1>{t?.title}</h1>
      </main>
    </div>
  );
}
