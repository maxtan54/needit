import Image from "next/image";
import Link from "next/link";

const LINKS = {
  product: [
    { href: "/#how-it-works", label: "How it works" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "mailto:info@needit3d.de", label: "info@needit3d.de" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 pt-14 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.png" alt="NeedIt" width={32} height={32} />
              <span className="font-bold text-neutral-900">NeedIt</span>
            </Link>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
              Physical NFC that open your digital menu instantly. No app, no
              reprinting.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-neutral-800 mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              {LINKS.product.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-neutral-800 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {LINKS.company.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} NeedIt. All rights reserved.
          </p>
          <p className="text-xs text-neutral-400">
            Made with care for restaurants everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
