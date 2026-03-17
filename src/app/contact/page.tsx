import Link from "next/link";
import { Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 bg-neutral-50 border-b text-center">
        <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">
          Contact
        </p>
        <h1 className="text-5xl font-bold mb-5">Let&apos;s talk</h1>
        <p className="text-neutral-500 text-xl max-w-md mx-auto">
          Have a question, want to place an order, or need help? We&apos;re here.
        </p>
      </section>

      {/* Main content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
            <p className="text-neutral-500 mb-8">
              Leave your name and phone number and we&apos;ll call you back — usually within the same business day.
            </p>
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Other ways to reach us</h2>
            <p className="text-neutral-500 mb-8">
              Choose whatever works best for you — we respond on all channels.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-neutral-200 bg-white hover:border-orange-200 hover:shadow-sm transition-all group">
                <div className="w-11 h-11 rounded-xl bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center shrink-0 transition-colors">
                  <Mail className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="font-semibold mb-0.5">Email</p>
                  <Link
                    href="mailto:hello@needit.app"
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors"
                  >
                    hello@needit.app
                  </Link>
                  <p className="text-xs text-neutral-400 mt-1">Reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl border border-neutral-200 bg-white hover:border-orange-200 hover:shadow-sm transition-all group">
                <div className="w-11 h-11 rounded-xl bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center shrink-0 transition-colors">
                  <MessageCircle className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="font-semibold mb-0.5">Telegram</p>
                  <p className="text-sm text-neutral-500">Message us on Telegram for fast responses</p>
                  <p className="text-xs text-neutral-400 mt-1">Often reply within minutes during business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl border border-neutral-200 bg-white hover:border-orange-200 hover:shadow-sm transition-all group">
                <div className="w-11 h-11 rounded-xl bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center shrink-0 transition-colors">
                  <Clock className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="font-semibold mb-0.5">Business hours</p>
                  <p className="text-sm text-neutral-500">Monday – Friday, 9:00 – 18:00</p>
                  <p className="text-xs text-neutral-400 mt-1">We aim to respond to all messages within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl border border-neutral-200 bg-white hover:border-orange-200 hover:shadow-sm transition-all group">
                <div className="w-11 h-11 rounded-xl bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center shrink-0 transition-colors">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="font-semibold mb-0.5">Shipping</p>
                  <p className="text-sm text-neutral-500">We ship worldwide</p>
                  <p className="text-xs text-neutral-400 mt-1">3–5 business days delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ nudge */}
      <section className="py-12 px-4 bg-neutral-50 border-t">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-neutral-500">
            Looking for quick answers?{" "}
            <Link href="/faq" className="font-semibold text-orange-500 hover:text-orange-600 transition-colors">
              Browse the FAQ →
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
