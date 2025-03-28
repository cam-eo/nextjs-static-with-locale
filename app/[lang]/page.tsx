"use client";
import styles from "./page.module.css";
import { useTranslations } from "@/providers/TranslationContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const { t } = useTranslations();
  const { push } = useRouter();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button style={{ width: "130px" }} onClick={() => push("/en")}>
            en
          </button>
          <button style={{ width: "130px" }} onClick={() => push("/nl")}>
            nl
          </button>
        </div>
        <h1>{t.title}</h1>
      </main>
    </div>
  );
}
