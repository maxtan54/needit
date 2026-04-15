import Image from "next/image";
import Link from "next/link";
import {
  QrCode,
  FileText,
  Smartphone,
  WifiOff,
  RefreshCw,
  BarChart2,
  CheckCircle2,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default async function HomePage() {
  const t = await getTranslations("HomePage");

  const FEATURES = [
    { icon: WifiOff, title: t("featureNoAppTitle"), desc: t("featureNoAppDesc") },
    { icon: RefreshCw, title: t("featureUpdateTitle"), desc: t("featureUpdateDesc") },
    { icon: BarChart2, title: t("featureTrackTitle"), desc: t("featureTrackDesc") },
    { icon: Smartphone, title: t("featurePhoneTitle"), desc: t("featurePhoneDesc") },
    { icon: QrCode, title: t("featureNfcTitle"), desc: t("featureNfcDesc") },
    { icon: FileText, title: t("featurePdfTitle"), desc: t("featurePdfDesc") },
  ];

  const STEPS = [
    { icon: QrCode, step: "01", title: t("step01Title"), desc: t("step01Desc") },
    { icon: FileText, step: "02", title: t("step02Title"), desc: t("step02Desc") },
    { icon: Smartphone, step: "03", title: t("step03Title"), desc: t("step03Desc") },
  ];

  const PRICING = [
    {
      name: t("starterName"), price: "€14.99", tags: t("starterTags"), desc: t("starterDesc"),
      features: [t("starterFeature1"), t("starterFeature2"), t("starterFeature3"), t("starterFeature4")],
      popular: false,
    },
    {
      name: t("businessName"), price: "€69.99", tags: t("businessTags"), desc: t("businessDesc"),
      features: [t("businessFeature1"), t("businessFeature2"), t("businessFeature3"), t("businessFeature4")],
      popular: true,
    },
    {
      name: t("restaurantName"), price: "€139.99", tags: t("restaurantTags"), desc: t("restaurantDesc"),
      features: [t("restaurantFeature1"), t("restaurantFeature2"), t("restaurantFeature3"), t("restaurantFeature4")],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero.webp"
            alt="Restaurant ambiance"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white" />
        </div>
        <Image
          src="/logo.png"
          alt="NeedIt logo"
          width={72}
          height={72}
          className="mb-6"
        />

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight max-w-2xl leading-[1.1] mb-5">
          {t("heroTitle")}
          <span className="text-orange-500">{t("heroHighlight")}</span>
        </h1>
        <p className="text-xl text-neutral-500 max-w-xl mb-10 leading-relaxed">
          {t("heroDesc")}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
            <Link href="#how-it-works">{t("howItWorks")}</Link>
          </Button>
        </div>

        <p className="text-sm text-neutral-400">{t("startingAt")}</p>
      </section>

      {/* ── How It Works ─────────────────────────────────────────── */}
      <section id="how-it-works" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">
            {t("gettingStarted")}
          </p>
          <h2 className="text-4xl font-bold mb-16">{t("threeSteps")}</h2>

          <div className="grid sm:grid-cols-3 gap-10 relative">
            <div className="hidden sm:block absolute top-7 left-[20%] right-[20%] h-px bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200" />

            {STEPS.map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="flex flex-col items-center gap-4 relative">
                <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-100 z-10">
                  <Icon className="text-white w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-orange-400 tracking-widest">
                  {t("step")} {step}
                </span>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────── */}
      <section className="py-24 bg-neutral-50 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">
            {t("whyNeedit")}
          </p>
          <h2 className="text-4xl font-bold mb-4">{t("everythingYouNeed")}</h2>
          <p className="text-neutral-500 mb-16 text-lg">{t("everythingDesc")}</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 hover:shadow-md hover:border-orange-200 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center mb-4 transition-colors">
                  <Icon className="text-orange-500 w-5 h-5" />
                </div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing teaser ───────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">
            {t("pricing")}
          </p>
          <h2 className="text-4xl font-bold mb-4">{t("payOnce")}</h2>
          <p className="text-neutral-500 mb-16 text-lg">{t("pricingDesc")}</p>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {PRICING.map(({ name, price, tags, desc, features, popular }) => (
              <div
                key={name}
                className={`rounded-2xl border p-7 text-left relative ${
                  popular
                    ? "border-orange-400 shadow-xl shadow-orange-50 bg-white"
                    : "border-neutral-200 bg-white"
                }`}
              >
                {popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    {t("mostPopular")}
                  </div>
                )}
                <p className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-2">
                  {tags}
                </p>
                <h3 className="font-bold text-xl mb-1">{name}</h3>
                <p className="text-neutral-500 text-sm mb-4">{desc}</p>
                <p className="text-4xl font-bold mb-6">{price}</p>
                <ul className="space-y-2 mb-6">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-neutral-600">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full" variant={popular ? "default" : "outline"}>
                  <Link href="/contact">{t("orderNow")}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ───────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">{t("ctaTitle")}</h2>
          <p className="text-orange-100 mb-8 text-lg">{t("ctaDesc")}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50 h-12 px-8 text-base font-semibold"
              asChild
            >
              <Link href="/contact">{t("ctaButton")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
