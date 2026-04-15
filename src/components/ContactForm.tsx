"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const t = useTranslations("ContactForm");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setName("");
      setPhone("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-6">
        <p className="text-2xl mb-2">✓</p>
        <p className="font-semibold text-neutral-800">{t("successTitle")}</p>
        <p className="text-sm text-neutral-500 mt-1">{t("successDesc")}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-orange-500 hover:underline"
        >
          {t("sendAnother")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-700 mb-1">
          {t("yourName")}
        </label>
        <input
          id="contact-name"
          type="text"
          required
          placeholder={t("namePlaceholder")}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-neutral-700 mb-1">
          {t("phoneNumber")}
        </label>
        <input
          id="contact-phone"
          type="tel"
          required
          placeholder={t("phonePlaceholder")}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-xl border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">{t("error")}</p>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? t("sending") : t("submit")}
      </Button>
    </form>
  );
}
