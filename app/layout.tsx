import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.windo.ch"),
  icons: {
    icon: [
      { url: '/windo-favicon_26/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/windo-favicon_26/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/windo-favicon_26/apple-touch-icon.png',
  },
  manifest: '/windo-favicon_26/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <CookieBanner />
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="2e443cf2-a2c0-4c4e-b165-dc20a6622106"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
