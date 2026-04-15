import Image from "next/image";
import Link from "next/link";
import { Heart, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const VALUES = [
  {
    icon: Heart,
    title: "Built for restaurateurs",
    desc: "We designed NeedIt for the restaurant owner who doesn't have time to learn new software. If it takes more than 5 minutes, we haven't done our job.",
  },
  {
    icon: Target,
    title: "Simple by design",
    desc: "No bloated dashboards. No complicated setups. One tag, one PDF, one scan. That's it — and that's all you need.",
  },
  {
    icon: Lightbulb,
    title: "Always improving",
    desc: "We listen to the restaurants we work with. Every feature update comes from real feedback from real venues using NeedIt every day.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 bg-neutral-50 border-b">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">
            Our story
          </p>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Built for restaurants,
            <br />
            by someone who loves them
          </h1>
          <p className="text-neutral-500 text-xl leading-relaxed">
            NeedIt was born from a simple frustration: watching great
            restaurants lose customers because their menus were outdated, hard
            to read, or simply unavailable when guests wanted them.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              The problem we set out to solve
            </h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                Every time a restaurant prints a new menu, they spend money and
                time — and the moment it&apos;s printed, it&apos;s already a
                little out of date. Prices change. Dishes sell out. Seasonal
                items come and go.
              </p>
              <p>
                We saw the same pattern everywhere: restaurants stuck in a cycle
                of reprinting, laminating, and replacing menus, while their
                customers squinted at worn-out paper in dim lighting.
              </p>
              <p>
                We knew there was a better way. NFC technology was already in
                every modern smartphone. PDF tools were widely available. The
                only missing piece was a product that made it dead simple — no
                technical knowledge required.
              </p>
              <p>
                So we built NeedIt. A physical tag you stick to a table, linked
                to a PDF you upload online. Tap or scan, and your menu appears
                full-screen on any phone. Change your menu? Upload a new PDF.
                Done.
              </p>
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
            What we believe
          </p>
          <h2 className="text-3xl font-bold mb-14">Our values</h2>
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
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">
            Our mission
          </p>
          <h2 className="text-3xl font-bold mb-6">
            Make digital menus accessible to every restaurant, everywhere
          </h2>
          <p className="text-neutral-500 text-lg leading-relaxed mb-10">
            Whether you run a street food stall or a fine dining restaurant, you
            deserve modern tools that just work — without the complexity or the
            monthly bill. NeedIt delivers that in a small physical tag that
            costs less than a dinner for two.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to work with us?</h2>
          <p className="text-orange-100 mb-8">
            Let&apos;s get your venue set up with a digital menu that works as
            hard as you do.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50 h-12 px-8 text-base font-semibold"
            >
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
