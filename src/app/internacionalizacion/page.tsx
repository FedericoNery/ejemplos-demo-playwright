'use client';
import { useLocale, useTranslations } from "next-intl";
import { getLocalizedCountryNames } from "@/services/internacionalizacion";
//document.cookie = "locale=fr; path=/";

export default function Internacionalizacion() {
  const t = useTranslations();
  const locale = useLocale();
  const countries = getLocalizedCountryNames(locale);
  return (
    <main>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <ul>
        {countries.map((c) => (
          <li key={c.code}>{c.name}</li>
        ))}
      </ul>
    </main>
  );
}
