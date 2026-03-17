import Link from "next/link";
import { CheckCircle2, ArrowRight, Package, Zap, Building2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PLANS = [
  {
    icon: Package,
    name: "Starter",
    price: "$24.99",
    period: "one-time",
    tags: "1 NFC + QR tag",
    desc: "Perfect for small cafes, food trucks, or trying it out.",
    popular: false,
    features: [
      "1 physical NFC + QR tag",
      "1 menu slot (PDF upload)",
      "Unlimited menu updates",
      "Scan analytics dashboard",
      "Works on all phones",
      "Email support",
    ],
    cta: "Order Starter",
  },
  {
    icon: Zap,
    name: "Business",
    price: "$89.99",
    period: "one-time",
    tags: "5 NFC + QR tags",
    desc: "Great for mid-size restaurants covering multiple tables or areas.",
    popular: true,
    features: [
      "5 physical NFC + QR tags",
      "5 menu slots",
      "Unlimited menu updates",
      "Advanced scan analytics",
      "Works on all phones",
      "Priority email support",
      "Save 28% vs Starter × 5",
    ],
    cta: "Order Business",
  },
  {
    icon: Building2,
    name: "Restaurant",
    price: "$159.99",
    period: "one-time",
    tags: "10 NFC + QR tags",
    desc: "Full coverage for large restaurants, hotels, and multi-room venues.",
    popular: false,
    features: [
      "10 physical NFC + QR tags",
      "10 menu slots",
      "Unlimited menu updates",
      "Advanced analytics + exports",
      "Works on all phones",
      "Priority support",
      "Onboarding video call",
      "Save 36% vs Starter × 10",
    ],
    cta: "Order Restaurant",
  },
];

const COMPARE_ROWS = [
  { feature: "Physical NFC + QR tag", starter: "1", business: "5", restaurant: "10", enterprise: "Custom" },
  { feature: "Menu slots", starter: "1", business: "5", restaurant: "10", enterprise: "Unlimited" },
  { feature: "Menu updates", starter: "Unlimited", business: "Unlimited", restaurant: "Unlimited", enterprise: "Unlimited" },
  { feature: "Scan analytics", starter: "Basic", business: "Advanced", restaurant: "Advanced + export", enterprise: "Full" },
  { feature: "Support", starter: "Email", business: "Priority email", restaurant: "Priority + call", enterprise: "Dedicated" },
  { feature: "Custom branding", starter: "—", business: "—", restaurant: "—", enterprise: "✓" },
  { feature: "API access", starter: "—", business: "—", restaurant: "—", enterprise: "✓" },
  { feature: "Onboarding call", starter: "—", business: "—", restaurant: "✓", enterprise: "✓" },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 text-center bg-neutral-50 border-b">
        <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">
          Pricing
        </p>
        <h1 className="text-5xl font-bold mb-4">Pay once, keep forever</h1>
        <p className="text-neutral-500 text-xl max-w-xl mx-auto">
          No subscriptions, no hidden fees. Order your NFC tags, upload your menu, and you&apos;re live — permanently.
        </p>
      </section>

      {/* Plans */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-7">
            {PLANS.map(({ icon: Icon, name, price, period, tags, desc, popular, features, cta }) => (
              <div
                key={name}
                className={`rounded-2xl border p-8 flex flex-col relative ${
                  popular
                    ? "border-orange-400 shadow-2xl shadow-orange-50"
                    : "border-neutral-200"
                }`}
              >
                {popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${popular ? "bg-orange-500" : "bg-neutral-100"}`}>
                  <Icon className={`w-6 h-6 ${popular ? "text-white" : "text-neutral-600"}`} />
                </div>

                <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">{tags}</p>
                <h2 className="text-2xl font-bold mb-2">{name}</h2>
                <p className="text-neutral-500 text-sm mb-6 leading-relaxed">{desc}</p>

                <div className="mb-8">
                  <span className="text-5xl font-bold">{price}</span>
                  <span className="text-neutral-400 text-sm ml-2">{period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-600">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  className="w-full"
                  variant={popular ? "default" : "outline"}
                >
                  <Link href="/contact">{cta}</Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Enterprise card */}
          <div className="mt-7 rounded-2xl border border-neutral-200 bg-gradient-to-r from-neutral-900 to-neutral-800 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Enterprise</h3>
              </div>
              <p className="text-neutral-300 text-sm max-w-lg">
                Restaurant chains, hotel groups, and large multi-venue operators. Get custom tag counts, branded hardware, API access, and a dedicated account manager.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white shrink-0 px-8"
            >
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 px-4 bg-neutral-50 border-y">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Compare plans</h2>
          <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-100">
                  <th className="text-left p-4 font-semibold text-neutral-700 w-[35%]">Feature</th>
                  <th className="p-4 font-semibold text-neutral-700 text-center">Starter</th>
                  <th className="p-4 font-semibold text-orange-500 text-center bg-orange-50">Business</th>
                  <th className="p-4 font-semibold text-neutral-700 text-center">Restaurant</th>
                  <th className="p-4 font-semibold text-neutral-700 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map(({ feature, starter, business, restaurant, enterprise }, i) => (
                  <tr key={feature} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50/50"}>
                    <td className="p-4 text-neutral-600">{feature}</td>
                    <td className="p-4 text-center text-neutral-600">{starter}</td>
                    <td className="p-4 text-center text-neutral-700 font-medium bg-orange-50/50">{business}</td>
                    <td className="p-4 text-center text-neutral-600">{restaurant}</td>
                    <td className="p-4 text-center text-neutral-600">{enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">What&apos;s in the box</h2>
          <p className="text-center text-neutral-500 mb-12">Every order ships with everything you need to get live today.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Physical NFC Tag", desc: "Waterproof, scratch-resistant tag rated for 10+ years of use." },
              { title: "QR Code Sticker", desc: "High-contrast QR sticker for tables without NFC support." },
              { title: "Mounting kit", desc: "3M adhesive tape for quick, residue-free installation." },
              { title: "Setup guide", desc: "Step-by-step instructions to get your menu live in minutes." },
            ].map(({ title, desc }) => (
              <div key={title} className="rounded-xl border border-neutral-200 p-5">
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-orange-500">
        <div className="max-w-xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Not sure which plan to choose?</h2>
          <p className="text-orange-100 mb-8">
            Drop us a message — we&apos;ll recommend the right option for your venue size.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-orange-600 hover:bg-orange-50 h-12 px-8 font-semibold"
          >
            <Link href="/contact">
              Talk to us <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
