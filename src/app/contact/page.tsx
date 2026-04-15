import Link from "next/link";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");
  return { title: t("contactTitle") };
}

export default async function ContactPage() {
  const t = await getTranslations("ContactPage");

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <Navbar />

      {/* Main content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-bold mb-2">{t("sendMessage")}</h2>
            <p className="text-neutral-500 mb-8">{t("sendMessageDesc")}</p>
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-bold mb-2">{t("otherWays")}</h2>
            <p className="text-neutral-500 mb-8">{t("otherWaysDesc")}</p>

            <div className="space-y-5">
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-neutral-200 bg-white hover:border-orange-200 hover:shadow-sm transition-all group">
                <div className="w-11 h-11 rounded-xl bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center shrink-0 transition-colors">
                  <Mail className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="font-semibold mb-0.5">{t("email")}</p>
                  <Link
                    href="mailto:info@needit3d.de"
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors"
                  >
                    info@needit3d.de
                  </Link>
                  <p className="text-xs text-neutral-400 mt-1">{t("emailReply")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl border border-neutral-200 bg-white hover:border-orange-200 hover:shadow-sm transition-all group">
                <div className="w-11 h-11 rounded-xl bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center shrink-0 transition-colors">
                  <MessageCircle className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="font-semibold mb-0.5">{t("whatsapp")}</p>
                  <p className="text-sm text-neutral-500">{t("whatsappDesc")}</p>
                  <p className="text-xs text-neutral-400 mt-1">{t("whatsappReply")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl border border-neutral-200 bg-white hover:border-orange-200 hover:shadow-sm transition-all group">
                <div className="w-11 h-11 rounded-xl bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center shrink-0 transition-colors">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="font-semibold mb-0.5">{t("shipping")}</p>
                  <p className="text-sm text-neutral-500">{t("shippingDesc")}</p>
                  <p className="text-xs text-neutral-400 mt-1">{t("shippingTime")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
