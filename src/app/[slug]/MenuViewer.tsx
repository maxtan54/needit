"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Restaurant } from "@/lib/db/schema";

type Props = {
  restaurant: Restaurant;
  isMobile: boolean;
};

export default function MenuViewer({ restaurant, isMobile }: Props) {
  const [barVisible, setBarVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setBarVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const barBg = restaurant.primaryColor ?? "#111827";
  const googleViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(restaurant.pdfMenuUrl)}&embedded=true`;
  const iframeSrc = isMobile ? googleViewerUrl : restaurant.pdfMenuUrl;

  return (
    <div style={{ position: "fixed", inset: 0, overflow: "hidden", background: "#1a1a1a" }}>
      {/* Top brand bar */}
      <div
        onClick={() => setBarVisible((v) => !v)}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          background: barBg,
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "10px 16px",
          cursor: "pointer",
          opacity: barVisible ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: barVisible ? "auto" : "none",
        }}
      >
        {restaurant.logoUrl && (
          <Image
            src={restaurant.logoUrl}
            alt={restaurant.name}
            width={32}
            height={32}
            className="rounded-full object-cover"
            style={{ flexShrink: 0 }}
          />
        )}
        <span style={{ color: "#fff", fontWeight: 600, fontSize: 15, letterSpacing: 0.2 }}>
          {restaurant.name}
        </span>
      </div>

      {/* PDF iframe */}
      <iframe
        src={iframeSrc}
        style={{ width: "100%", height: "100%", border: "none", display: "block" }}
        title={`${restaurant.name} menu`}
        allow="fullscreen"
      />

      {/* Mobile fallback: floating "Open PDF" button */}
      {isMobile && (
        <a
          href={restaurant.pdfMenuUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            bottom: 24,
            right: 16,
            background: barBg,
            color: "#fff",
            padding: "10px 18px",
            borderRadius: 24,
            fontWeight: 600,
            fontSize: 14,
            textDecoration: "none",
            boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
            zIndex: 10,
          }}
        >
          Open PDF
        </a>
      )}
    </div>
  );
}
