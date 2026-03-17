import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const FAQ_SECTIONS = [
  {
    category: "Getting started",
    items: [
      {
        q: "How does NeedIt work?",
        a: "You order a physical NFC/QR tag from us, upload your PDF menu to your NeedIt dashboard, and stick the tag on your tables. When customers tap (NFC) or scan (QR code), they see your menu full-screen on their phone — no app required.",
      },
      {
        q: "Do I need any technical knowledge?",
        a: "None at all. Our setup takes under 5 minutes: create an account, upload a PDF, receive your tag in the mail, peel and stick. That's it. If you can send an email, you can set up NeedIt.",
      },
      {
        q: "How long does delivery take?",
        a: "We ship within 1–2 business days of your order. Delivery typically takes 3–5 business days depending on your location. You can start configuring your menu dashboard as soon as you order — before the tag even arrives.",
      },
      {
        q: "Can I try it before buying?",
        a: "We don't offer a free trial for the physical tags, but we're happy to answer any questions before you order. Reach out via the contact page and we'll walk you through how it works.",
      },
    ],
  },
  {
    category: "Tags & hardware",
    items: [
      {
        q: "What phones support NFC?",
        a: "NFC works natively on iPhones XS and newer (iOS 13+) and virtually all Android phones released after 2018. The built-in QR code on every tag acts as a universal fallback for older devices.",
      },
      {
        q: "How durable are the tags?",
        a: "Our tags are waterproof and scratch-resistant, rated for 10+ years of use in a restaurant environment. They handle spills, cleaning products, and normal wear without any issues.",
      },
      {
        q: "Can I use the tags outdoors?",
        a: "Yes. The NFC chip and QR sticker are weather-resistant and can be used on outdoor patio tables. We recommend placing them where they won't be in direct prolonged sunlight, which can fade the QR print over time.",
      },
      {
        q: "What if a tag gets damaged?",
        a: "Contact us and we'll send a replacement tag. We can link it to your existing menu instantly — no configuration needed on your end.",
      },
      {
        q: "Can I move a tag to a different table?",
        a: "Yes. The 3M adhesive can be carefully removed and reapplied. Each tag links to your menu URL, so moving it doesn't change anything about how it works.",
      },
    ],
  },
  {
    category: "Menu management",
    items: [
      {
        q: "What file formats are supported?",
        a: "We support PDF files only. PDF is the universal standard for menus — it preserves your formatting, fonts, and layout perfectly on every device. If you have your menu in Word or another format, just export it as a PDF first.",
      },
      {
        q: "How do I update my menu?",
        a: "Log in to your NeedIt dashboard, go to your restaurant profile, and upload a new PDF. Every tag at your venue will show the new menu immediately — no reprinting, no swapping tags.",
      },
      {
        q: "Is there a limit on menu file size?",
        a: "We support PDFs up to 25MB. For best performance, we recommend keeping your menu under 5MB. Large PDFs can be slow to load on mobile — a good PDF export from most design tools will be well within limits.",
      },
      {
        q: "Can I have different menus for different tables?",
        a: "Each tag links to one menu. With the Business and Restaurant plans, you can have multiple menu slots — for example, a lunch menu on bar tables and a dinner menu on dining tables.",
      },
    ],
  },
  {
    category: "Pricing & billing",
    items: [
      {
        q: "Is there a monthly fee?",
        a: "No. NeedIt is a one-time purchase. You pay for the tags once and own them forever. There are no subscriptions, no renewal fees, and no hidden costs.",
      },
      {
        q: "What's included in the price?",
        a: "Every order includes the physical NFC + QR tags, mounting hardware, and access to the NeedIt dashboard for uploading and managing your menu PDF. All future menu updates are free and unlimited.",
      },
      {
        q: "Do you offer refunds?",
        a: "If your tags arrive damaged or defective, we'll replace them free of charge. Because the tags are physical goods, we generally don't offer refunds after delivery — but contact us and we'll always try to find a solution.",
      },
      {
        q: "Do you offer discounts for large orders?",
        a: "Yes. Our Restaurant plan (10 tags) already offers significant savings. For orders of 20+ tags, please contact us for a custom Enterprise quote.",
      },
    ],
  },
  {
    category: "Technical",
    items: [
      {
        q: "Does the menu work without an internet connection?",
        a: "The tag redirects customers to a URL where the menu is hosted. An internet connection is required on the customer's phone to load the menu — but no special app or account is needed.",
      },
      {
        q: "Can customers save the menu offline?",
        a: "On most phones, customers can open the PDF and save it locally. This is a standard browser feature and works automatically.",
      },
      {
        q: "How is my menu data stored?",
        a: "Your PDF is stored securely in the cloud with redundant backups. Menu scans are logged anonymously (no personal data collected from customers) to power your analytics dashboard.",
      },
      {
        q: "What happens if NeedIt goes down?",
        a: "We maintain 99.9% uptime. In the unlikely event of downtime, we'll notify you immediately. Your menu PDF is also accessible directly via a backup URL we provide with every order.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 bg-neutral-50 border-b text-center">
        <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">
          Support
        </p>
        <h1 className="text-5xl font-bold mb-5">Frequently asked questions</h1>
        <p className="text-neutral-500 text-xl max-w-xl mx-auto mb-8">
          Everything you need to know about NeedIt. Can&apos;t find an answer?
        </p>
        <Button asChild variant="outline">
          <Link href="/contact">
            Ask us directly <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </section>

      {/* FAQ sections */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto space-y-14">
          {FAQ_SECTIONS.map(({ category, items }) => (
            <div key={category}>
              <h2 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-5">
                {category}
              </h2>
              <Accordion type="single" collapsible className="border border-neutral-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                {items.map(({ q, a }, i) => (
                  <AccordionItem key={i} value={`${category}-${i}`} className="px-2">
                    <AccordionTrigger className="text-base font-medium px-4 text-left">
                      {q}
                    </AccordionTrigger>
                    <AccordionContent className="text-neutral-500 px-4 leading-relaxed">
                      {a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 px-4 bg-neutral-50 border-t">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Still have questions?</h2>
          <p className="text-neutral-500 mb-8">
            We&apos;re happy to help. Send us a message and we&apos;ll get back to you within one business day.
          </p>
          <Button asChild size="lg" className="px-8">
            <Link href="/contact">
              Contact us <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
