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

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");
  return {
    title: { default: t("homeTitle"), template: "%s | NeedIt" },
    description: t("homeDescription"),
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
