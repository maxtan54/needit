"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Footer() {
  const t = useTranslations("Footer");

  const LINKS = {
    product: [{ href: "/#how-it-works", label: t("howItWorks") }],
    company: [
      { href: "/about", label: t("about") },
      { href: "/contact", label: t("contact") },
    ],
  };

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 pt-14 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.png" alt="NeedIt" width={32} height={32} />
              <span className="font-bold text-neutral-900">NeedIt</span>
            </Link>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
              {t("tagline")}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-neutral-800 mb-4">
              {t("product")}
            </h4>
            <ul className="space-y-2.5">
              {LINKS.product.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-neutral-800 mb-4">
              {t("company")}
            </h4>
            <ul className="space-y-2.5">
              {LINKS.company.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:info@needit3d.de"
                  className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  info@needit3d.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-400">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <p className="text-xs text-neutral-400">{t("madeWith")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
