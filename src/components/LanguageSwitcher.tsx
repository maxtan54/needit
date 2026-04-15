"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";

const LOCALE_LABELS: Record<string, string> = {
  de: "Deutsch",
  en: "English",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newLocale = e.target.value;
    localStorage.setItem("NEXT_LOCALE", newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
    router.refresh();
  }

  return (
    <div className="relative inline-flex items-center">
      <select
        value={locale}
        onChange={handleChange}
        className="appearance-none bg-transparent text-sm text-neutral-400 hover:text-neutral-600 pr-5 cursor-pointer outline-none transition-colors"
      >
        {Object.entries(LOCALE_LABELS).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <ChevronDown className="w-3.5 h-3.5 text-neutral-400 absolute right-0 pointer-events-none" />
    </div>
  );
}
