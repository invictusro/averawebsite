import type { Metadata, Viewport } from "next";
import "./globals.css";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  title: "AVERA - Advanced Crypto Platform",
  description: "AVERA - ICO & Crypto Landing Page",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-js">
      <body>
        <Preloader />

        {/* Scroll-top */}
        <button className="scroll__top scroll-to-target" data-target="html">
          <i className="fas fa-arrow-up"></i>
        </button>

        {children}
      </body>
    </html>
  );
}
