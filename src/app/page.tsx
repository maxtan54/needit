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
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const FEATURES = [
  {
    icon: WifiOff,
    title: "No app needed",
    desc: "Customers open the menu instantly in their browser — no download, no friction.",
  },
  {
    icon: RefreshCw,
    title: "Always up-to-date",
    desc: "Upload a new PDF and every tag in your venue shows the latest menu immediately.",
  },
  {
    icon: BarChart2,
    title: "Track views",
    desc: "See how many times your menu is scanned each day with built-in analytics.",
  },
  {
    icon: Smartphone,
    title: "iPhone & Android",
    desc: "Works perfectly on every device, no compatibility issues.",
  },
  {
    icon: QrCode,
    title: "NFC",
    desc: "Each order includes a physical tag that works with both NFC tap and QR scan.",
  },
  {
    icon: FileText,
    title: "Any PDF",
    desc: "Keep using the menu design you already have — just upload the PDF file.",
  },
];

export default function HomePage() {
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
          Your restaurant menu,{" "}
          <span className="text-orange-500">one scan away</span>
        </h1>
        <p className="text-xl text-neutral-500 max-w-xl mb-10 leading-relaxed">
          Physical NFC that open your digital menu instantly — no app, no
          reprinting, no hassle.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <Button
            size="lg"
            variant="outline"
            className="h-12 px-8 text-base"
            asChild
          >
            <Link href="#how-it-works">How it works</Link>
          </Button>
        </div>

        <p className="text-sm text-neutral-400">
          Starting at $24.99 · No monthly fees · Free shipping
        </p>
      </section>

      {/* ── How It Works ─────────────────────────────────────────── */}
      <section id="how-it-works" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">
            Getting started
          </p>
          <h2 className="text-4xl font-bold mb-16">
            Three steps to go digital
          </h2>

          <div className="grid sm:grid-cols-3 gap-10 relative">
            {/* connector line (desktop) */}
            <div className="hidden sm:block absolute top-7 left-[20%] right-[20%] h-px bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200" />

            {[
              {
                icon: QrCode,
                step: "01",
                title: "Order your tag",
                desc: "We ship a branded NFC to your venue. Peel, stick and done.",
              },
              {
                icon: FileText,
                step: "02",
                title: "Upload your MENU",
                desc: "Log in once, upload your existing menu PDF or LINK.",
              },
              {
                icon: Smartphone,
                step: "03",
                title: "Customers scan",
                desc: "A tap or scan opens your menu instantly on any phone.",
              },
            ].map(({ icon: Icon, step, title, desc }) => (
              <div
                key={step}
                className="flex flex-col items-center gap-4 relative"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-100 z-10">
                  <Icon className="text-white w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-orange-400 tracking-widest">
                  STEP {step}
                </span>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────── */}
      <section className="py-24 bg-neutral-50 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">
            Why NeedIt
          </p>
          <h2 className="text-4xl font-bold mb-4">Everything you need</h2>
          <p className="text-neutral-500 mb-16 text-lg">
            Simple, reliable, and built for busy venues.
          </p>

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
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing teaser ───────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-4xl font-bold mb-4">Pay once, use forever</h2>
          <p className="text-neutral-500 mb-16 text-lg">
            No subscriptions. No surprises. Just your menu, always on.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              {
                name: "Starter",
                price: "€14.99",
                tags: "1 tag",
                desc: "Perfect for cafes & small venues",
                features: [
                  "1 NFC",
                  "Unlimited menu updates",
                  "Scan analytics",
                  "Email support",
                ],
                popular: false,
              },
              {
                name: "Business",
                price: "€69.99",
                tags: "5 tags",
                desc: "Best for mid-size restaurants",
                features: [
                  "5 NFC",
                  "Unlimited menu updates",
                  "Advanced analytics",
                  "Priority support",
                ],
                popular: true,
              },
              {
                name: "Restaurant",
                price: "€139.99",
                tags: "10 tags",
                desc: "Full coverage for large venues",
                features: [
                  "10 NFC",
                  "Unlimited menu updates",
                  "Advanced analytics",
                  "Priority + onboarding call",
                ],
                popular: false,
              },
            ].map(({ name, price, tags, desc, features, popular }) => (
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
                    Most Popular
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
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-neutral-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="w-full"
                  variant={popular ? "default" : "outline"}
                >
                  <Link href="/contact">Order now</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ───────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to go digital?</h2>
          <p className="text-orange-100 mb-8 text-lg">
            Join 50+ venues already using NeedIt. Setup takes less than 10
            minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50 h-12 px-8 text-base font-semibold"
              asChild
            >
              <Link href="/contact">Get started today</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
