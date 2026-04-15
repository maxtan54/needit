import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import ReactQueryProvider from "@/lib/providers/query";
import { ThemeProvider } from "@/lib/providers/theme";
import AuthProvider from "@/lib/providers/auth";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://needit3d.de";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");
  return {
    title: { default: t("homeTitle"), template: "%s | NeedIt" },
    description: t("homeDescription"),
    keywords: t("homeKeywords"),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      siteName: "NeedIt",
      title: t("homeTitle"),
      description: t("homeDescription"),
      url: SITE_URL,
      images: [
        {
          url: "/logo.png",
          width: 512,
          height: 512,
          alt: "NeedIt — Digital menus via NFC",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("homeTitle"),
      description: t("homeDescription"),
      images: ["/logo.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className="min-h-[100%] flex flex-col"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grow-1 flex flex-col bg-neutral-50`}
      >
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            <ReactQueryProvider>
              <NextIntlClientProvider messages={messages}>
                {children}
                <Toaster />
              </NextIntlClientProvider>
            </ReactQueryProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
