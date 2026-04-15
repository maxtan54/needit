import Image from "next/image";
import Link from "next/link";
import { Heart, Target, Lightbulb } from "lucide-react";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");
  return { title: t("aboutTitle") };
}

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");

  const VALUES = [
    { icon: Heart, title: t("value1Title"), desc: t("value1Desc") },
    { icon: Target, title: t("value2Title"), desc: t("value2Desc") },
    { icon: Lightbulb, title: t("value3Title"), desc: t("value3Desc") },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 bg-neutral-50 border-b">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">
            {t("ourStory")}
          </p>
          <h1 className="text-5xl font-bold mb-6 leading-tight whitespace-pre-line">
            {t("heroTitle")}
          </h1>
          <p className="text-neutral-500 text-xl leading-relaxed">
            {t("heroDesc")}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t("problemTitle")}</h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>{t("problemP1")}</p>
              <p>{t("problemP2")}</p>
              <p>{t("problemP3")}</p>
              <p>{t("problemP4")}</p>
            </div>
          </div>
          <div className="relative">
            <div className="h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-neutral-200">
              <Image
                src="/about.webp"
                alt="NeedIt founder"
                width={600}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-neutral-50 border-y">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">
            {t("whatWeBelieve")}
          </p>
          <h2 className="text-3xl font-bold mb-14">{t("ourValues")}</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="text-left bg-white rounded-2xl border border-neutral-200 p-7"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-3">{title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">
            {t("ourMission")}
          </p>
          <h2 className="text-3xl font-bold mb-6">{t("missionTitle")}</h2>
          <p className="text-neutral-500 text-lg leading-relaxed mb-10">
            {t("missionDesc")}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{t("ctaTitle")}</h2>
          <p className="text-orange-100 mb-8">{t("ctaDesc")}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50 h-12 px-8 text-base font-semibold"
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
