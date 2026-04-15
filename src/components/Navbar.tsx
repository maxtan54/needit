"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="NeedIt" width={32} height={32} />
          <span className="font-bold text-neutral-900 text-lg">NeedIt</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                pathname === href
                  ? "text-orange-500"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button asChild>
            <Link href="/contact">Order Now</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1.5 rounded-lg hover:bg-neutral-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-neutral-100 bg-white px-4 py-5 flex flex-col gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                pathname === href
                  ? "bg-orange-50 text-orange-600"
                  : "text-neutral-700 hover:bg-neutral-50"
              }`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-neutral-100">
            <Button asChild className="w-full">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Order Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
