import Image from "next/image";
import Link from "next/link";
import { QrCode, FileText, Smartphone, WifiOff, RefreshCw, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContactForm } from "@/components/ContactForm";

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
    title: "NFC + QR tag",
    desc: "Each order includes a physical tag that works with both NFC tap and QR scan.",
  },
  {
    icon: FileText,
    title: "Any PDF",
    desc: "Keep using the menu design you already have — just upload the PDF file.",
  },
];

const FAQ = [
  {
    q: "How does it work?",
    a: "You order a physical NFC/QR tag from us, upload your PDF menu, and stick the tag on your tables. When customers tap or scan it, they see your menu full-screen on their phone.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "None at all. Our setup takes under 5 minutes: upload a PDF, receive your tag in the mail, peel and stick.",
  },
  {
    q: "What if I update my menu?",
    a: "Log in, upload your new PDF, and every tag instantly reflects the new menu — no reprinting, no swapping tags.",
  },
  {
    q: "Does it work on all phones?",
    a: "Yes. NFC works natively on iPhones (XS and newer) and all modern Android phones. The QR code works as a universal fallback.",
  },
  {
    q: "How much does it cost?",
    a: "Contact us for pricing tailored to the number of tags you need. We offer single-venue and multi-venue plans.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero.webp"
            alt="Restaurant ambiance"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white" />
        </div>

        <Image src="/logo.webp" alt="NeedIt logo" width={64} height={64} className="mb-6 rounded-2xl shadow" />

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-2xl leading-tight mb-4">
          Your restaurant menu,<br />
          <span className="text-orange-500">one scan away</span>
        </h1>
        <p className="text-lg text-neutral-500 max-w-xl mb-8">
          Physical NFC &amp; QR tags that open your digital PDF menu instantly — no app, no reprinting, no hassle.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button size="lg" asChild>
            <Link href="mailto:hello@needit.app">Order your tags</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#how-it-works">See how it works</Link>
          </Button>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────── */}
      <section id="how-it-works" className="py-20 bg-neutral-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Three steps to go digital</h2>
          <p className="text-neutral-500 mb-12">From order to live in under 10 minutes of your time.</p>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: QrCode,
                step: "1",
                title: "Order your tag",
                desc: "We ship a branded NFC + QR tag to your venue. Peel, stick, done.",
              },
              {
                icon: FileText,
                step: "2",
                title: "Upload your PDF",
                desc: "Log in once, upload your existing menu PDF. No redesign needed.",
              },
              {
                icon: Smartphone,
                step: "3",
                title: "Customers scan",
                desc: "A tap or scan opens your menu full-screen — instantly, on any phone.",
              },
            ].map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
                  <Icon className="text-orange-500 w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-orange-500 uppercase tracking-widest">Step {step}</span>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-neutral-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Everything you need</h2>
          <p className="text-neutral-500 mb-12">Simple, reliable, and built for busy venues.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                  <Icon className="text-orange-500 w-5 h-5" />
                </div>
                <h3 className="font-semibold mb-1">{title}</h3>
                <p className="text-neutral-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────── */}
      <section className="py-20 bg-neutral-50 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Simple pricing</h2>
          <p className="text-neutral-500 mb-8">No complicated tiers. Pay per tag, keep it forever.</p>

          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <p className="text-5xl font-bold mb-1">Contact us</p>
            <p className="text-neutral-500 mb-6">for a quote tailored to your venue size</p>
            <ul className="text-sm text-neutral-600 space-y-2 mb-8 text-left">
              {[
                "Physical NFC + QR tag included",
                "Unlimited menu updates",
                "Scan analytics dashboard",
                "Works on every phone",
                "No monthly subscription required",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-orange-500 font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
            <Button size="lg" className="w-full" asChild>
              <Link href="#contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="border rounded-2xl overflow-hidden bg-white shadow-sm px-2">
            {FAQ.map(({ q, a }, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-base font-medium px-4">{q}</AccordionTrigger>
                <AccordionContent className="text-neutral-500 px-4">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Get in Touch ─────────────────────────────────────────── */}
      <section id="contact" className="py-20 bg-neutral-50 px-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Get in touch</h2>
          <p className="text-neutral-500 mb-8">
            Leave your name and phone number and we'll call you to discuss how NeedIt can work for your venue.
          </p>
          <div className="rounded-2xl border bg-white p-8 shadow-sm text-left">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="py-10 px-4 border-t bg-neutral-50">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.webp" alt="NeedIt" width={32} height={32} className="rounded-lg" />
            <span className="font-semibold text-neutral-800">NeedIt</span>
          </div>
          <p className="text-sm text-neutral-400">© {new Date().getFullYear()} NeedIt. All rights reserved.</p>
          <Link href="mailto:hello@needit.app" className="text-sm text-neutral-400 hover:text-neutral-700 transition-colors">
            hello@needit.app
          </Link>
        </div>
      </footer>
    </div>
  );
}
